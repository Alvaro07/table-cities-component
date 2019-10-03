import styled from 'styled-components'

export const WrapList = styled.ul`
  flex: 1;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--light-grey);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--grey);
  }
`

export const Loading = styled.div`
  padding: 10px;
  text-align: center;
`
