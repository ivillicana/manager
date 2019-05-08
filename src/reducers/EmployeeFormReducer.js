import {
  EMPLOYEE_UPDATE 
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      return { ...state }  
    default:
      return state;
  }
};