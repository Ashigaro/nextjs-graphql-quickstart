import { ReduxProvider } from '@/providers/ReduxProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { PropsWithChildren } from 'react';
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
