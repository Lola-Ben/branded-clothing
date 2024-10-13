import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";


import rootReducer from "./root.reducer";


 const middlewares = [logger];

export const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
 
export default store;