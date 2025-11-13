'use client';

import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';

interface IProvider {
	children: ReactNode;
}

export function ReduxProvider({ children }: IProvider) {
	return <Provider store={store}>{children}</Provider>;
}
