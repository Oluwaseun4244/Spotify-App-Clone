import { lightModeState } from "./reducers/reducers";
import { combineReducers, createStore  } from "redux";


const myReducers = combineReducers({
  lightModeState,
});


export const store = createStore(myReducers);
