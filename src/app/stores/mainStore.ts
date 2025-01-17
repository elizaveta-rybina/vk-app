/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { headerReducer } from 'entities'

const mainReducer = combineReducers({
	activeLink: headerReducer,
})

export type RootState = ReturnType<typeof mainReducer>

export const mainStore = configureStore({
	reducer: mainReducer,
})
