import styled from 'styled-components'

import CoreButton from 'app/components/core/Button'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.background};
  padding: 3rem;
`

export const Button = styled(CoreButton)`
  margin: 0.5rem 0;
`
