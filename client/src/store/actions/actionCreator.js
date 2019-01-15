const url = 'http://192.168.0.109:8001/api';

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

export function getHelperDetails() {
  return (dispatch) => {
    fetch(`${url}/helper`)
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: 'GET_HELPER_DETAILS', data });
      });
  };
}
