/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit'

//TODO - разобраться почему не импортируется из entities
import { headerReducer } from 'entities/model'

const mainReducer = combineReducers({
	activeLink: headerReducer,
})

export type RootState = ReturnType<typeof mainReducer>

export const mainStore = configureStore({
	reducer: mainReducer,
})
