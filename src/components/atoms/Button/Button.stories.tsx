import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Click me',
		variant: 'contained',
		color: 'primary',
	},
};
