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
    <div>
      <label>
        Status:
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </label>

      <label>
        Species:
        <input
          type="text"
          name="species"
          value={filters.species}
          placeholder="e.g., Human, Alien"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}
