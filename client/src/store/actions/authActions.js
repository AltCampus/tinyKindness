import { GET_USER_DATA } from './types';

const URI = 'http://localhost:8001/api/v1';

const authActions = {
  getUserData: ({ token }, cb) => (dispatch) => {
    fetch(`${URI}/users`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.status !== 401 || res.status !== 404) {
          res.json()
            .then((user) => {
              dispatch({
                type: GET_USER_DATA,
                user,
              });
              cb(true);
            });
        }
    });
  },
};

export default authActions;