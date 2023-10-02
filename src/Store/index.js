import {configureStore} from '@reduxjs/toolkit'

import { logger } from 'redux-logger';
import { TodoReducer } from './Todo';

const RootReducer={
    todos:TodoReducer
}
export const Store=configureStore({
    reducer:RootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([logger])
})