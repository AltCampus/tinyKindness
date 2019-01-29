const initState = {
  helpers: [],
  loginUser: {},
  currentUserData: {},
  allIntroTags: [],
  allResourcesTags: [],
  allFeedbackTags: [],
  searchedTags: [],
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_HELPER_DETAILS': {
      return {
        ...state,
        helpers: action.data,
      };
    }
    case 'GET_HELPER_DETAILS': {
      return {
        ...state,
        helpers: action.data,
      };
    }
    case 'LOGIN_USER': {
      return {
        ...state,
        loginUser: action.data,
      };
    }
    case 'LOGOUT_USER': {
      return {
        ...state,
        loginUser: {},
      }
    }
    case 'USER_DETAILS': {
      return {
        ...state,
        currentUserData: action.data
      }
    }
    case 'STORE_INTROTAGS': {
      return {
        ...state,
        allIntroTags: action.data
      }
    }
    case 'STORE_RESOURCESTAGS': {
      return {
        ...state,
        allResourcesTags: action.data
      }
    }
    case 'STORE_FEEDBACKTAGS': {
      return {
        ...state,
        allFeedbackTags: action.data
      }
    }
    case 'SEARCH_TAGS': {
      return {
        ...state,
        searchedTags: action.data
      }
    }
    default: return state;
  }
}
