import * as actionTypes from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_STUDENTS:
      return {
        ...state,
        students: [...action.payload.data],
      };
    case actionTypes.ADD_TAG:
      const index = state.students.findIndex((x) => x.id === action.payload.id);
      let student = state.students[index];
      if (student.tags) {
        student.tags = [...student.tags, action.payload.data];
      } else {
        student.tags = [action.payload.data];
      }
      return state;

    default:
      return state;
  }
};

export { reducer };
