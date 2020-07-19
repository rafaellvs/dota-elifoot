import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 500px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`
