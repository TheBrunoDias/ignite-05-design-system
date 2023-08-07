import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        {story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 1,
    size: 4,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    size: 4,
  },
}
