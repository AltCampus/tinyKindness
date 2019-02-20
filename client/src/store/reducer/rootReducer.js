const initState = {
  serachedTags: null
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case "SEARCHED_TAGS": {
      return {
        ...state,
        serachedTags: action.data
      };
    }
    default:
      return state;
  }
}
