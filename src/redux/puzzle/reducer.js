import actionTypes from '../actionTypes';
 const { SET_SCORE} = actionTypes;


const initialState = {
    score:[],
};

const commonReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case 'SET_SCORE':
        return {
          ...state,
          score: action.payload,
        }
        default:{
            return newState;
        }
    }
};

export default commonReducer;