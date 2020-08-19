import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initailState = [];

//  Default Function takes state and action. Action contains two things type and payload(i.e data)
// We need to evaluate type using switch statement
export default function (state = initailState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    // We want to remove alert from particular id, for each alert we check if the id is not equal to payload
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
