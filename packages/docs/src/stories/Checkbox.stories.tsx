import { Box, Text, CheckBox, CheckBoxProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: CheckBox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {story()}
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}
