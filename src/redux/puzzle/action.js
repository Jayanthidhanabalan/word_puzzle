import actionTypes from '../actionTypes';
const { SET_SCORE} = actionTypes;

export const setScore = (userScore) => {
    return async (dispatch) => {
        await dispatch({ type: "SET_SCORE", payload:userScore  });
    };
};