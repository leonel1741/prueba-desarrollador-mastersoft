import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./slices/favorites.slice";

export default configureStore({
    reducer: {
        favorites: favoritesSlice
    }
})