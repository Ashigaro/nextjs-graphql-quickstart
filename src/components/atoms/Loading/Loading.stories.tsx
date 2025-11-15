import type { Meta, StoryObj } from '@storybook/nextjs';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
	title: 'Atoms/Loading',
	component: Loading,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
