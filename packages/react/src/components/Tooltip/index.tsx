import { ComponentProps } from 'react'
import { TooltipContainer, TooltipContent, TooltipArrow } from './styles'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  content: string
  side?: 'left' | 'right' | 'top' | 'bottom'
  delayDuration?: number
}

export function Tooltip({
  content,
  side = 'top',
  delayDuration = 500,
  sideOffset = 8,
  children,
  ...props
}: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={delayDuration}>
        <TooltipContainer asChild>{children}</TooltipContainer>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={sideOffset} side={side} {...props}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
