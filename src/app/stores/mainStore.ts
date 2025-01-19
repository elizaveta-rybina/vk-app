/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const mainReducer = combineReducers({})

export type RootState = ReturnType<typeof mainReducer>

export const mainStore = configureStore({
	reducer: mainReducer,
})
