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
            const id = action.payload;
            if (state.favorites.includes(id)) {
                state.favorites = state.favorites.filter((favoriteId) => favoriteId !== id);
            } else {
                state.favorites.push(id);
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