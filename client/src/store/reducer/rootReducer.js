import { GET_USER_DATA, SET_USER_PROFILE, SET_TAGS_INTO_REDUX } from '../actions/types';

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

		case SET_TAGS_INTO_REDUX : {
			const { tag, category } = action.payload;
			let tags = [];

			if (category === 'introductions') {
				tags = [...state.user.introductions]
			} else if(category === 'resources') {
				tags = [...state.user.resources]
			} else {
				tags = [...state.user.feedback]
			}

			return {
				...state,
				user: {
					...state.user,
					[category]: [...tags, tag]
				}
			}

		}

		default: return state;
	}
}
