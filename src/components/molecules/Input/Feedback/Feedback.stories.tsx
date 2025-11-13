import type { Meta, StoryObj } from '@storybook/nextjs';
import { Feedback } from './Feedback';

const meta: Meta<typeof Feedback> = {
	title: 'Molecules/Input/Feedback',
	component: Feedback,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Feedback>;

export const Default: Story = {
	args: {
		data: 'This is a feedback message',
		isError: false,
		isDisabled: false,
	},
};
