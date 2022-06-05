import styled from '@emotion/styled'

export interface FieldProps {
  isError?: boolean
}

export const Field = styled.input<FieldProps>`
  transition: border-color 0.2s ease-in-out;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #3a3a3a;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  border-color: ${({ isError }) => isError && 'red'};

  &:hover,&:focus {
    border-color: #9d9d9d;
  }
`
