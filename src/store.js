import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger/src";
import thunk from "redux-thunk";
import companyReducer from "./reducers/companyReducer";
const middleware = [thunk, logger];

export const store = createStore(
	companyReducer,
	applyMiddleware(...middleware)
);
