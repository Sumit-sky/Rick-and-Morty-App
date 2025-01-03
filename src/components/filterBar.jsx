import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/store";

export default function FilterBar() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.app.filters);

  const handleFilterChange = (e) => {
    dispatch(setFilters({ [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex md:justify-end items-center text-white max-md:w-full max-md:mt-2">
      <div className="float-right flex justify-evenly max-md:flex-col max-md:w-full">
        <label className="flex md:justify-around items-center">
          Status:
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="border rounded-md p-1 outline-none w-full text-black ml-2"
          >
            <option value="">Any</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>

        <label className="flex md:justify-around max-md:justify-between items-center md:ml-4 max-md:my-2">
          Species:
          <input
            type="text"
            name="species"
            value={filters.species}
            placeholder="e.g., Human, Alien"
            onChange={handleFilterChange}
            className="border rounded-md p-1 outline-none w-full max-md:w-full text-black ml-2"
          />
        </label>
      </div>
    </div>
  );
}
