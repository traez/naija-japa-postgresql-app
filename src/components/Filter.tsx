"use client";
import { useState } from "react";
import FilterAge from "./FilterAge";
import FilterSex from "./FilterSex";
import FilterMarital from "@/components/FilterMarital";
import FilterChildren from "@/components/FilterChildren";
import FilterLanguages from "@/components/FilterLanguages";
import FilterReligion from "@/components/FilterReligion";
import FilterYear from "@/components/FilterYear";
import FilterCity from "@/components/FilterCity";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="container px-4 py-4 bg-[#b2d3c2]">
      <h1 className="text-2xl font-bold mb-6">
        Filter Nigerians by{" "}
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="inline-block bg-white border border-gray-300 rounded-md shadow-sm px-3 py-1 text-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a filter</option>
          <option value="age">Age</option>
          <option value="sex">Gender</option>
          <option value="maritalStatus">Marital Status</option>
          <option value="numberOfChildren">Number of Children</option>
          <option value="languagesSpoken">Languages Spoken</option>
          <option value="religion">Religion</option>
          <option value="japaYear">Japa Year</option>
          <option value="city">City</option>
        </select>
      </h1>

      <div>
        {selectedFilter === "age" && <FilterAge />}
        {selectedFilter === "sex" && <FilterSex />}
        {selectedFilter === "maritalStatus" && <FilterMarital />}
        {selectedFilter === "numberOfChildren" && <FilterChildren />}
        {selectedFilter === "languagesSpoken" && <FilterLanguages />}
        {selectedFilter === "religion" && <FilterReligion />}
        {selectedFilter === "japaYear" && <FilterYear />}
        {selectedFilter === "city" && <FilterCity />}
      </div>
    </div>
  );
};

export default Filter;
