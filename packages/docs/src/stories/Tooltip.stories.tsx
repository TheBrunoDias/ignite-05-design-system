import { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
} from '@thebrunodias-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    content: '21 de Outubro - Indisponível',
    children: <Button>Hello There</Button>,
    side: 'top',
    delayDuration: 500,
    sideOffset: 8,
  },
  argTypes: {
    content: {
      type: 'string',
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    delayDuration: {
      type: 'number',
    },
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (story) => (
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '$40',
        }}
      >
        {story()}
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
