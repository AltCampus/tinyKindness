const url = "http://localhost:8001/api/v1";

export function getIntroductionTag(query) {
  return dispatch => {
    fetch(`${url}/introductions?q=${query}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SEARCHED_TAGS", data });
      });
  };
}

export function getResourceTags(query) {
  return dispatch => {
    fetch(`${url}/resources?q=${query}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SEARCHED_TAGS", data });
      });
  };
}

export function getFeedbackTags(query) {
  return dispatch => {
    fetch(`${url}/feedback?q=${query}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SEARCHED_TAGS", data });
      });
  };
}
