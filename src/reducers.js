/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import { reducer as formReducer } from "redux-form/immutable";
import history from "./utils/history";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer(injectReducers = {}) {
  return combineReducers({
    router: connectRouter(history),
    form: formReducer.plugin({}),
    ...injectReducers
  });
}
