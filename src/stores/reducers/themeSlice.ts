import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { AppState } from '@/stores/store';

type ThemeState = {
	theme: 'light' | 'dark' | '';
};

const initialState: ThemeState = {
	theme: '',
};

const themeSlice = createSlice({
	name: 'themeSlice',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
	},
});

const selectThemeSlice = (state: AppState) => state.themeStore;

const selectTheme = createSelector(
	selectThemeSlice,
	(state: ThemeState) => state.theme,
);

export const { setTheme } = themeSlice.actions;

export default themeSlice;

export type { ThemeState };

export { selectTheme };
