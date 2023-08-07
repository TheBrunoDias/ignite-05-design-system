import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicatior } from './styles'
import { ComponentProps } from 'react'

export type CheckBoxProps = ComponentProps<typeof CheckboxContainer>

export function CheckBox(props: CheckBoxProps) {
  return (
    <>
      <CheckboxContainer {...props}>
        <CheckboxIndicatior asChild>
          <Check weight="bold" />
        </CheckboxIndicatior>
      </CheckboxContainer>
    </>
  )
}

CheckBox.displayName = 'CheckBox'
