import { keyframes, styled } from '../../styles'
import * as RadixTooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(10px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-10px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContainer = styled(RadixTooltip.Trigger, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const TooltipContent = styled(RadixTooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: '$3 $4',
  color: '$gray100',
  fontFamily: '$default',
  fontWeight: '$medium',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  fontSize: '$sm',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
})
