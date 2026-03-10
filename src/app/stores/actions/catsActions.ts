import { createAction } from '@reduxjs/toolkit'
import { Cat } from '../types'

export const setCats = createAction<Cat[]>('cats/setCats');
export const addToFavorites = createAction<Cat>('cats/addToFavorites');
export const removeFromFavorites = createAction<string>('cats/removeFromFavorites');
