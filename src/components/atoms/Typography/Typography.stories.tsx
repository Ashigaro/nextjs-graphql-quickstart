import type { Meta, StoryObj } from '@storybook/nextjs';
import { Typography } from './Typography';

const meta: Meta<typeof Typography.Title> = {
	title: 'Atoms/Typography',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography.Title>;

export const Default: Story = {
	render: () => <Typography.Title level="h1">Heading Title</Typography.Title>,
};
