import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { Close, Description, Title, ToastContainer } from './style'

export interface ToastProps {
  title: string
  message?: string
}

export function ToastProvider(props: ToastPrimitive.ToastProviderProps) {
  const [content, setContent] = useState<ToastProps>()

  return (
    <ToastPrimitive.Provider {...props}>
      {props.children}

      {content && (
        <ToastContainer>
          <ToastPrimitive.Title>{content?.title}</ToastPrimitive.Title>
          <Description>{content?.message}</Description>
          <Close>
            <X />
          </Close>
        </ToastContainer>
      )}
    </ToastPrimitive.Provider>
  )
}
