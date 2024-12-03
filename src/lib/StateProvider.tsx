"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";
import { naijaJapaType } from "@/lib/Types";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

type DataState = {
  s4australia: naijaJapaType[];
  s4canada: naijaJapaType[];
  s4southafrica: naijaJapaType[];
  s4uk: naijaJapaType[];
  s4us: naijaJapaType[];
};

export interface StateContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  s4data: DataState;
  setS4Data: React.Dispatch<React.SetStateAction<DataState>>;
  fetchData: () => Promise<void>;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const [loading, setLoading] = useState(false);
  const [s4data, setS4Data] = useState<DataState>({
    s4australia: [],
    s4canada: [],
    s4southafrica: [],
    s4uk: [],
    s4us: [],
  });

  const fetchData = async () => {
    try {
      setLoading(true);
    
      const [australia, canada, southafrica, uk, us] = await Promise.all([
        supabase.from("s4australia").select("*"),
        supabase.from("s4canada").select("*"),
        supabase.from("s4southafrica").select("*"),
        supabase.from("s4uk").select("*"),
        supabase.from("s4us").select("*"),
      ]);

      if (australia.error)
        throw new Error(`s4australia: ${australia.error.message}`);
      if (canada.error) throw new Error(`s4canada: ${canada.error.message}`);
      if (southafrica.error)
        throw new Error(`s4southafrica: ${southafrica.error.message}`);
      if (uk.error) throw new Error(`s4uk: ${uk.error.message}`);
      if (us.error) throw new Error(`s4us: ${us.error.message}`);

      setS4Data({
        s4australia: australia.data || [],
        s4canada: canada.data || [],
        s4southafrica: southafrica.data || [],
        s4uk: uk.data || [],
        s4us: us.data || [],
      });
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        s4data,
        setS4Data,
        fetchData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
