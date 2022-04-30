const initialState = {
    search: ''
}

const filterSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case "Filter/SEARCH_FILTER":
            return {

            }
    }
    default:
        return state
}