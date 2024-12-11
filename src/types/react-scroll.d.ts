declare module 'react-scroll' {
  import React from 'react'

  export interface LinkProps {
    to: string
    spy?: boolean
    smooth?: boolean
    offset?: number
    duration?: number
    className?: string
    activeClass?: string
  }

  export const Link: React.ComponentType<React.PropsWithChildren<LinkProps>>

  export interface ScrollProps {
    to: string
    smooth?: boolean
    offset?: number
    duration?: number
  }

  export function scrollTo(options: ScrollProps): void
}
