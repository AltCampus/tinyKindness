const url = "http://localhost:8001/api/v1";

export function getIntroductionTag(query, cb) {
  return dispatch => {
    fetch(`${url}/introductions?q=${query}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "INTRODUCTION_TAGS", data });
        cb(true, data);
      });
  };
}

export function getResourceTags(query, cb) {
  return dispatch => {
    fetch(`${url}/resources?q=${query}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "RESOURCES_TAGS", data });
        cb(true, data);
      });
  };
}

export function getFeedbackTags(query, cb) {
  return dispatch => {
    fetch(`${url}/feedback?q=${query}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FEEDBACK_TAGS", data });
        cb(true, data);
      });
  };
}

export function submitUserData(data, userId) {
  console.log(data, userId);
  return dispatch => {
    fetch(`${url}/${userId}/info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
}

export function getAllUsers(){
  return dispatch => {
  fetch(`${url}/helper`).then(res => res.json()).then(data => console.log(data))
  }
}