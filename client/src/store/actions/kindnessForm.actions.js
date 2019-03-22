import { SET_TAGS_INTO_REDUX } from "./types";

const kindnessForm = {
  addTagsToForm: (data) => (dispatch) => {
    dispatch({
      type: SET_TAGS_INTO_REDUX,
      payload: data
    })
  }
};

export default kindnessForm;