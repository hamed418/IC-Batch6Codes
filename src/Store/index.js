import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { cartReducer } from './cart';



const rootReducer = {
    carta: cartReducer 
}

const myLogger = (store) => (next) => (action) => {
    console.log(`Prev State: ${JSON.stringify(store.getState())}`);
    console.log(`ACTION: ${JSON.stringify(action)}`);
    next(action)
}

// useSelector((state) => state.cart)
export const Store = configureStore({
    reducer: rootReducer,
    // composeWithDevTools(applyMiddleware(myLogger, logger))
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, myLogger])

})