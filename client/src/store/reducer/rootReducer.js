const initState = {
  helpers: [],
  loginUser: {},
  currentUserData: {}
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
    
    default: return state;
  }
}
