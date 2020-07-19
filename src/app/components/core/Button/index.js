import styled from 'styled-components'

import theme from 'app/helpers/theme'

const Button = styled.button`
  display: block;
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth || '100px'};
  background: ${theme.colors.white};
  border: none;
  padding: .5rem;
  margin: 0 auto;
  transform: ${({ active }) => active && 'scale(1.25)'};
  transition: background .3s, font-size .3s;

  &:hover:not([disabled]) {
    background: ${theme.colors.hover};
    cursor: pointer;
  }
`

export default Button
