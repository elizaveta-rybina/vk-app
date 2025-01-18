import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TActiveLinkState } from './types'

const initialState: TActiveLinkState = {
	activeId: Number(localStorage.getItem('activeId')) || 0,
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		setActiveLink(state, action: PayloadAction<number>) {
			state.activeId = action.payload
			localStorage.setItem('activeId', action.payload.toString())
		},
	},
})

export const { setActiveLink } = headerSlice.actions
export const headerReducer = headerSlice.reducer
