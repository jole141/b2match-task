const initState = {
  items: [],
  loading: false,
  error: null,
};
const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default dataReducer;
