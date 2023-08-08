import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        setFavorites: (state, action) => {
            const favorites = action.payload;
            state.push(favorites);
            return state;
        }
    }
});

export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;