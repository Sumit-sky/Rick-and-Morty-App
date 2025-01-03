import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    filters: { status: '', species: '' },
    favorites: [],
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
        setFilters(state, action) {
            state.filters = { ...state.filters, ...action.payload };
        },
        toggleFavorite(state, action) {
            const character = action.payload;
            const exists = state.favorites.find((fav) => fav.id === character.id);

            if (exists) {
                state.favorites = state.favorites.filter((fav) => fav.id !== character.id);
            } else {
                state.favorites.push(character);
            }
        }
        ,
    },
});

export const { setPage, setFilters, toggleFavorite } = appSlice.actions;

const store = configureStore({
    reducer: { app: appSlice.reducer },
});

export default store;