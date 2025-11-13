import type { FC } from 'react';
import { type AvailableIcons, Icon, Typography } from '@/components';

interface IProps {
	icon: AvailableIcons;
	title: string;
}

const IconBox: FC<IProps> = ({ icon, title }) => {
	return (
		<div className="group relative flex w-full flex-col justify-center gap-4 rounded-xl border border-br-regular bg-background-component px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
			<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<Icon
				name={icon}
				size="3.5em"
				className="relative z-10 mx-auto text-primary transition-transform duration-300 group-hover:scale-110"
			/>
			<Typography.Text className="relative z-10 font-medium">
				{title}
			</Typography.Text>
		</div>
	);
};

export default IconBox;
