import {
  Box,
  Text,
  TextArea,
  TextAreaProps,
} from '@thebrunodias-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        {story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
