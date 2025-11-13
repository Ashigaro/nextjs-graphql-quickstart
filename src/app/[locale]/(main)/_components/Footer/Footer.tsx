import Link from 'next/link';
import type { FC } from 'react';
import { Icon } from '@/components';

export const Footer: FC = () => {
	return (
		<footer className="flex w-full border-t border-t-br-regular bg-background-component py-6">
			<div className="mx-auto flex items-center gap-3">
				<span className="text-sm text-gray-500">By: Shekoofeh Dezhahanj</span>
				<Link
					href="http://shekoofehdezhahanj.com"
					target="_blank"
					aria-label="Personal website"
				>
					<Icon
						size="1.5em"
						name="Globe"
						className="text-gray-500 hover:text-primary transition-colors"
					/>
				</Link>
				<Link
					href="https://github.com/shdezhahanj"
					target="_blank"
					aria-label="GitHub"
				>
					<Icon
						size="1.5em"
						name="GitHub"
						className="text-gray-500 hover:text-primary transition-colors"
					/>
				</Link>
				<Link
					href="https://linkedin.com/in/shekoofeh-dezhahanj"
					target="_blank"
					aria-label="LinkedIn"
				>
					<Icon
						size="1.5em"
						name="LinkedIn"
						className="text-gray-500 hover:text-primary transition-colors"
					/>
				</Link>
			</div>
		</footer>
	);
};
