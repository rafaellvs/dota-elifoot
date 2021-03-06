import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

const Cell = styled.td`
  max-width: ${({ width }) => width || 'unset'};
  text-align: ${({ align }) => align || 'left'}
  
  ${
    ({ variant }) => variant &&
      css`
        ${theme.variants[variant]}
      `
  }
`

export default Cell
