import { createReducer } from '@reduxjs/toolkit'

import { addToFavorites, removeFromFavorites, setCats } from '../actions'
import { CatsState } from '../types';

const initialState: CatsState = {
  cats: [],
  favorites: [],
};

export const catsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCats, (state, action) => {
      state.cats = action.payload;
    })
    .addCase(addToFavorites, (state, action) => {
      if (!state.favorites.find((cat) => cat.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    })
    .addCase(removeFromFavorites, (state, action) => {
      state.favorites = state.favorites.filter((cat) => cat.id !== action.payload);
    });
});
