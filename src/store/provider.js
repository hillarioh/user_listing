import React, { useReducer } from "react";
import * as actionTypes from "./types";
import { reducer } from "./reducer";
import StudentsContext from "./context";

const initialState = {
  students: [],
};

const StudentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTag = (id, data) => {
    dispatch({
      type: actionTypes.ADD_TAG,
      payload: { data, id },
    });
  };
  const addStudents = (data) => {
    dispatch({
      type: actionTypes.ADD_STUDENTS,
      payload: { data },
    });
  };

  return (
    <StudentsContext.Provider
      value={{
        students: state.students,
        addTag,
        addStudents,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsProvider;
