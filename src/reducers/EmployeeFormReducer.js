import {
  EMPLOYEE_UPDATE 
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // action.payload === { prop: 'name', value: 'Jane Doe' }
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };  
    default:
      return state;
  }
};