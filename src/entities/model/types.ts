import { Reducer } from '@reduxjs/toolkit'

export interface TActiveLinkState {
	activeId: number
}

export type TActiveLinkSliceStore = ReturnType<
	Reducer<{
		activeLink: TActiveLinkState
	}>
>
