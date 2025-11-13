import '@/styles/globals.css';
import { Footer, Header } from '@/components';

interface LayoutProps {
	children: React.ReactNode;
}

export default async function MainLayout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
