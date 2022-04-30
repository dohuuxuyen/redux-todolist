import React from "react";
import { useSelector } from "react-redux";
import { filterSearchSelector } from "../../redux/selector";

const FilterSearch = () => {
  const search = useSelector(filterSearchSelector);
  return (
    <div>
      <p>Search</p>
      <input value={search} style={{ height: "24px" }} />
    </div>
  );
};

export default FilterSearch;
