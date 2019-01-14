const initState = {
  helpers: [],
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_HELPER_DETAILS': {
      return {
        helpers: action.data,
      };
    }
    case 'GET_HELPER_DETAILS': {
      return {
        helpers: action.data,
      };
    }
    default: return state;
  }
}
