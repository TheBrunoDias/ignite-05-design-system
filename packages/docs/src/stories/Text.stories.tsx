import { Text, TextProps } from '@thebrunodias-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci praesentium saepe ab neque illo blanditiis odio voluptatum, quasi velit aspernatur tempora sint ipsam quod assumenda libero ex ea iure?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomText: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
