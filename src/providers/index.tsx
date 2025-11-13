import type { PropsWithChildren } from 'react';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ApolloWrapper } from './apollo-wrapper';

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ReduxProvider>
			<ThemeProvider>
				<ApolloWrapper>{children}</ApolloWrapper>
			</ThemeProvider>
		</ReduxProvider>
	);
};
