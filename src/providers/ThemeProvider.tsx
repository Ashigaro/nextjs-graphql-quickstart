'use client';

import { selectTheme, setTheme } from '@/stores/reducers/themeSlice';
import { useAppDispatch, useAppSelector } from '@/stores/reduxHooks';
import { type FC, type ReactNode, useEffect } from 'react';

const THEME_STORAGE_KEY = 'app-theme';

interface IProps {
	children: ReactNode;
}

export const ThemeProvider: FC<IProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector(selectTheme);

	useEffect(() => {
		// Load theme from localStorage on mount
		const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || '';
		if (savedTheme) {
			document.documentElement.setAttribute('data-theme', savedTheme);
			dispatch(setTheme(savedTheme));
		}
	}, [dispatch]);

	useEffect(() => {
		// Apply theme changes
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem(THEME_STORAGE_KEY, theme);
		} else {
			document.documentElement.removeAttribute('data-theme');
			localStorage.removeItem(THEME_STORAGE_KEY);
		}
	}, [theme]);

	return <>{children}</>;
};
