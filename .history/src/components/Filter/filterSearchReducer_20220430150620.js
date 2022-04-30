const initialState = {
  search: "",
};

const filterSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Filter/SEARCH_FILTER":
      return {
        search: action.payload,
      };
    default:
      return state;
  }
};

export default filterSearchReducer;
