import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'app-theme';

const useTheme = () => {
	const [theme, setTheme] = useState<string>('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Load theme from localStorage
			const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || '';
			const dataTheme = document.documentElement.getAttribute('data-theme');

			// Use saved theme if available, otherwise use current data-theme
			const initialTheme = savedTheme || dataTheme || '';

			if (initialTheme) {
				document.documentElement.setAttribute('data-theme', initialTheme);
			}
			setTheme(initialTheme);

			const observer = new MutationObserver(() => {
				const updatedTheme =
					document.documentElement.getAttribute('data-theme') || '';
				setTheme(updatedTheme);
			});

			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ['data-theme'],
			});

			return () => {
				observer.disconnect();
			};
		}
	}, []);

	const changeTheme = (newTheme: string) => {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('data-theme', newTheme);
			// Save theme to localStorage
			if (newTheme) {
				localStorage.setItem(THEME_STORAGE_KEY, newTheme);
			} else {
				localStorage.removeItem(THEME_STORAGE_KEY);
			}
			setTheme(newTheme);
		}
	};

	return { theme, changeTheme };
};

export default useTheme;
