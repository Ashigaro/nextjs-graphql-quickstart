import type { Meta, StoryObj } from '@storybook/nextjs';
import { type AvailableIcons, Icon } from './Icon';
import { Icons } from './Icons';

const meta: Meta<typeof Icon> = {
	title: 'Atoms/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		name: {
			control: 'select',
			options: Object.keys(Icons),
			description: 'The name of the icon to display',
		},
		size: {
			control: 'text',
			description: 'The size of the icon (default: 1em)',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply',
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
	args: {
		name: 'Sun',
		size: '2em',
	},
};

// All icons grid
export const AllIcons: Story = {
	render: () => {
		const allIcons = Object.keys(Icons) as AvailableIcons[];

		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
					gap: '1rem',
					maxWidth: '800px',
				}}
			>
				{allIcons.map((iconName) => (
					<div key={iconName} className="flex flex-col gap-2 items-center p-4 ">
						<Icon name={iconName} size="2rem" />
						<span className="text-tx-regular ">{iconName}</span>
					</div>
				))}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Complete grid of all available icons in the component library.',
			},
		},
	},
};
