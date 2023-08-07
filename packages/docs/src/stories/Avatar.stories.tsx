import { Avatar, AvatarProps } from '@thebrunodias-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/TheBrunoDias.png',
    alt: 'Bruno Dias',
  },
  argTypes: {
    src: {
      type: 'string',
    },
    alt: {
      type: 'string',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
