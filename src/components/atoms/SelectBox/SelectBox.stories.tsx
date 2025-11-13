import type { Meta, StoryObj } from '@storybook/nextjs';
import { SelectBox } from './SelectBox';

const meta: Meta<typeof SelectBox> = {
	title: 'Atoms/SelectBox',
	component: SelectBox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
	args: {
		options: [
			{ text: 'Option 1', value: '1' },
			{ text: 'Option 2', value: '2' },
			{ text: 'Option 3', value: '3' },
		],
		defaultValue: '1',
	},
};
