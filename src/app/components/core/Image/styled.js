import styled from 'styled-components'

export const StyledImage = styled.img`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  box-sizing: content-box;
`
