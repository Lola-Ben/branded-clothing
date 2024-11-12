import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import  createSagaMiddleware  from "redux-saga";


import rootReducer from "./root.reducer";
import rootSaga from "./root-saga";


const sagaMiddileware = createSagaMiddleware()
 const middlewares = [sagaMiddileware];
 if (process.env.NODE_ENV === "development"){
    middlewares.push(logger)
 }

export const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddileware.run(rootSaga)

export const persistor = persistStore(store);
 
export default store;