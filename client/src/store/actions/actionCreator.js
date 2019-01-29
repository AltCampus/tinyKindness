const url = 'http://192.168.1.108:8001/api';

export default function postHelperDetails(data) {
  return (dispatch) => {
      fetch(`${url}/helper`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: 'POST_HELPER_DETAILS', data });
      });
  };
}

export function getHelperDetails(cb) {
  return (dispatch) => {
    fetch(`${url}/helper`)
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: 'GET_HELPER_DETAILS', data });
        cb(true)
      });
  };
}

 export function loginUser(jwt) {
  return (dispatch) => {
    fetch(`${url}/user/${jwt}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'LOGIN_USER', data})
    })
  }
} 

export function logoutUser() {
  return {
    type: 'LOGOUT_USER'
  }
}

export function userDetails(username) {
  return dispatch => {
    fetch(`${url}/users/@${username}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch({type: 'USER_DETAILS', data})
    })
  }
}

export function getAllIntroctionTags() {
  return dispatch => {
    fetch(`${url}/introduction-tags`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'STORE_INTROTAGS', data})
    })
  }
}

export function getResourcesTags() {
  return dispatch => {
    fetch(`${url}/resources-tags`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'STORE_RESOURCESTAGS', data})
    })
  }
}

export function getFeedbackTags() {
  return dispatch => {
    fetch(`${url}/feedback-tags`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'STORE_FEEDBACKTAGS', data})
    })
  }
}

export function findIntroTags(query) {
  return dispatch => {
    fetch(`${url}/introudction-tags/search/?query=${query}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'SEARCH_TAGS', data})
    })
  }
}

export function findResourcesTags(query) {
  return dispatch => {
    fetch(`${url}/resources-tags/search/?query=${query}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'SEARCH_TAGS', data})
    })
  }
}

export function findFeedbackTags(query) {
  return dispatch => {
    fetch(`${url}/feedback-tags/search/?query=${query}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'SEARCH_TAGS', data})
    })
  }
}