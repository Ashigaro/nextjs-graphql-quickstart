import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'Molecules/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		type: 'email',
	},
};

