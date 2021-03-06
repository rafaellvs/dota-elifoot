import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const CoreTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  color: ${theme.colors.white};

  th {
    text-align: left;
  }
  
  th, td {
    padding: .5rem .8rem;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  tbody {
    tr {
      transition: background .3s;
      
      &:hover {
        background: ${theme.colors.hover};
        cursor: pointer;
      }
    }
  }
`
