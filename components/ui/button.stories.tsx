import type { Meta, StoryObj  } from '@storybook/react';
import { Button } from './button';

const meta : Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout : 'centered',
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant : "default",
    size : 'sm' ,
    disabled : false , 
    onClick :() => console.log('default clicked'),
    children : 'default btn' , 
    className : 'shadow-lg'
}
}