import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TActiveLinkState } from './types'

const initialState: TActiveLinkState = {
	activeId: 1,
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		setActiveLink(state, action: PayloadAction<number>) {
			state.activeId = action.payload
		},
	},
})

export const { setActiveLink } = headerSlice.actions
export default headerSlice.reducer
