import type { Meta, StoryObj } from '@storybook/nextjs';
import IconBox from './IconBox';

const meta: Meta<typeof IconBox> = {
	title: 'Molecules/IconBox',
	component: IconBox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconBox>;

export const Default: Story = {
	args: {
		icon: 'React',
		title: 'React',
	},
};

