import React, { FC, PropsWithChildren } from 'react'

import styled from '@emotion/styled'

export interface FieldWrapProps extends PropsWithChildren<unknown> {
  isOffset?: boolean
}

export const FieldWrap: FC<FieldWrapProps> = ({ isOffset, children }) => {
  return (
    <Core isOffset={isOffset}>
      {children}
    </Core>
  )
}


export interface CoreProps {
  isOffset?: boolean
}
export const Core = styled.label<CoreProps>`
  display: block;
  width: 100%;
  margin-bottom: ${({ isOffset }) => isOffset && '16px'};
`
