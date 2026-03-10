import { combineReducers, configureStore } from '@reduxjs/toolkit'
import catsReducer from './reducers'

const mainReducer = combineReducers({
  cats: catsReducer,
});

export type RootState = ReturnType<typeof mainReducer>;

export const mainStore = configureStore({
  reducer: mainReducer,
});

export type AppDispatch = typeof mainStore.dispatch;
