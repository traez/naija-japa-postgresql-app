"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { naijaJapaType } from "@/lib/Types";

const FilterCity = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [filteredData, setFilteredData] = useState<naijaJapaType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleCityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const city = event.target.value;
    setSelectedCity(city);

    if (city) {
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
          supabase.from(table).select("*").eq("city", city)
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
          htmlFor="city-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select a City
        </label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={handleCityChange}
          className="block min-w-[310px] max-w-[620px] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a city</option>
          {[
            "Johannesburg",
            "Pretoria",
            "Cape Town",
            "Accra",
            "Kumasi",
            "Nairobi",
            "Addis Ababa",
            "Kigali",
            "Casablanca",
            "Dakar",
            "Abidjan",
            "Bamako",
            "Cairo",
            "Kampala",
            "Luanda",
            "Houston",
            "Dallas",
            "Atlanta",
            "New York City",
            "Chicago",
            "Baltimore",
            "Washington DC",
            "Los Angeles",
            "Minneapolis",
            "Toronto",
            "Ottawa",
            "Vancouver",
            "Calgary",
            "Winnipeg",
            "Montreal",
            "London",
            "Manchester",
            "Birmingham",
            "Glasgow",
            "Leeds",
            "Liverpool",
            "Bristol",
            "Dublin",
            "Berlin",
            "Hamburg",
            "Frankfurt",
            "Munich",
            "Amsterdam",
            "Rotterdam",
            "Brussels",
            "Paris",
            "Lyon",
            "Madrid",
            "Barcelona",
            "Rome",
            "Milan",
            "Oslo",
            "Stockholm",
            "Copenhagen",
            "Warsaw",
            "Dubai",
            "Abu Dhabi",
            "Doha",
            "Riyadh",
            "Jeddah",
            "Muscat",
            "Manama",
            "Kuwait City",
            "Guangzhou",
            "Beijing",
            "Shanghai",
            "Tokyo",
            "New Delhi",
            "Mumbai",
            "Bangalore",
            "Singapore",
            "Kuala Lumpur",
            "Jakarta",
            "Bangkok",
            "Seoul",
            "Sydney",
            "Melbourne",
            "Brisbane",
            "Perth",
            "Canberra",
            "Auckland",
            "Wellington",
            "São Paulo",
            "Rio de Janeiro",
            "Buenos Aires",
            "Lima",
            "Bogotá",
            "Kingston",
            "Port of Spain",
            "Bridgetown",
            "Nassau",
            "Panama City",
            "San José",
            "Istanbul",
            "Ankara",
            "Tel Aviv",
            "Athens",
            "Zurich",
            "Vienna",
            "Helsinki",
          ].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading...</p>}

      {selectedCity && !loading && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Nigerians in {selectedCity}: {filteredData.length} results
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

      {selectedCity && !loading && filteredData.length === 0 && (
        <p className="text-gray-600">
          No results found for {selectedCity}.
        </p>
      )}
    </div>
  );
};

export default FilterCity;
