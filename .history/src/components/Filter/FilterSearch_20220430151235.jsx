import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFilter, setTodoInput } from "../../redux/actions";
import { filterSearchSelector } from "../../redux/selector";

const FilterSearch = () => {
  const search = useSelector(filterSearchSelector);
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    dispatch(searchFilter(e.target.value));
    // dispatch(setTodoInput(e.target.value));
  };
  return (
    <div>
      <p>Search</p>
      <input
        value={search}
        style={{ height: "24px" }}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default FilterSearch;
