import { GET_USER_DATA, SET_USER_PROFILE } from '../actions/types';

const initState = {
	user: null,
	profileUser: null,
};

export default function rootReducer(state = initState, action) {
	switch (action.type) {
		case GET_USER_DATA: {
			return {
				...state,
				user: action.user.user,
			};
		}

		case SET_USER_PROFILE: {
			return {
				...state,
				profileUser: action.user.user
			}	
		}

		default: return state;
	}
}
