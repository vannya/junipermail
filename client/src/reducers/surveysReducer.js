import { FETCH_SURVEYS, UPDATE_SURVEY } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case UPDATE_SURVEY:
      return action.payload;
    default:
      return state;
  }
}
