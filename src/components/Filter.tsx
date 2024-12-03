"use client";
import { useState } from "react";
import FilterAge from "./FilterAge";
import FilterSex from "./FilterSex";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
        </select>
      </h1>

      <div>
        {selectedFilter === "age" && <FilterAge />}
        {selectedFilter === "sex" && <FilterSex />}
      </div>
    </div>
  );
};

export default Filter;
