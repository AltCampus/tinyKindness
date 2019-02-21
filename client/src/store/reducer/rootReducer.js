import { GET_USER_DATA } from '../actions/types';

const initState = {
	user: null,
};

export default function rootReducer(state = initState, action) {
	switch (action.type) {
		case GET_USER_DATA: {
			return {
				user: action.user.user,
			};
		}

		default: return state;
	}
}
