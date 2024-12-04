"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { naijaJapaType } from "@/lib/Types";

const FilterChildren = () => {
  const [selectedChildren, setSelectedChildren] = useState<number | "">("");
  const [filteredData, setFilteredData] = useState<naijaJapaType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChildrenChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const numberOfChildren = event.target.value ? Number(event.target.value) : "";
    setSelectedChildren(numberOfChildren);

    if (numberOfChildren !== "") {
      setLoading(true);
      try {
        const tables = [
          "s4australia",
          "s4canada",
          "s4southafrica",
          "s4uk",
          "s4us",
        ];
        const queries = tables.map((table) =>
          supabase.from(table).select("*").eq("number_of_children", numberOfChildren)
        );

        const results = await Promise.all(queries);
        const combinedData = results.flatMap((result) => result.data || []);

        setFilteredData(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setFilteredData([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <label
          htmlFor="number-of-children-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select Number of Children
        </label>
        <select
          id="number-of-children-select"
          value={selectedChildren}
          onChange={handleChildrenChange}
          className="block min-w-[310px] max-w-[620px] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a number</option>
          {Array.from({ length: 7 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading...</p>}

      {selectedChildren !== "" && !loading && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Nigerians with {selectedChildren}{" "}
            {selectedChildren === 1 ? "child" : "children"}:{" "}
            {filteredData.length} results
          </h2>
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(165px,_1fr))] gap-4">
        {filteredData.map((item, index) => (
          <article
            key={item.user_id || index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold mb-2">
              {item.first_name} {item.last_name}
            </h3>
            <p className="text-colorProperty mb-1">
              Age: <span className="text-colorValue">{item.age}</span>
            </p>
            <p className="text-colorProperty mb-1">
              Sex: <span className="text-colorValue">{item.sex}</span>
            </p>
            <p className="text-colorProperty mb-1">
              Marital Status:{" "}
              <span className="text-colorValue">{item.marital_status}</span>
            </p>
            <p className="text-colorProperty mb-1">
              Number of Children:{" "}
              <span className="text-colorValue">{item.number_of_children}</span>
            </p>
            <p className="text-colorProperty mb-1">
              Languages Spoken:{" "}
              <span className="text-colorValue">{item.languages_spoken}</span>
            </p>
            <p className="text-colorProperty mb-1">
              Religion:{" "}
              <span className="text-colorValue">{item.religion}</span>
            </p>
            <p className="text-colorProperty mb-1">
              Year of Moving (Japa Year):{" "}
              <span className="text-colorValue">{item.japa_year}</span>
            </p>
            <p className="text-colorProperty mb-1">
              City: <span className="text-colorValue">{item.city}</span>
            </p>
            <p className="text-colorProperty mb-1">
              Occupation:{" "}
              <span className="text-colorValue">{item.occupation}</span>
            </p>
            <p className="text-colorProperty mb-1">
              Hobbies: <span className="text-colorValue">{item.hobbies}</span>
            </p>
          </article>
        ))}
      </div>

      {selectedChildren !== "" && !loading && filteredData.length === 0 && (
        <p className="text-gray-600">
          No results found for {selectedChildren}{" "}
          {selectedChildren === 1 ? "child" : "children"}.
        </p>
      )}
    </div>
  );
};

export default FilterChildren;
