import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  background: ${theme.colors.background};
  padding: 3rem;
`

export const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
`

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: 25%;
  padding: 1rem;
  background: ${({ selected }) => selected && theme.colors.hover};

  img {
    height: 100px;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 1rem;
  }
`
