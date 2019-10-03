import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

export const SearchWrap = styled.div`
  position: relative;
  width: 100%;
`

export const Input = styled.input.attrs({ type: 'search' })`
  width: 100%;
  padding: 3px 5px 3px 20px;

  border: none;
  border-bottom: 1px solid var(--grey);
  transition: 0.3s all ease;
  font-size: 1.3rem;

  ::placeholder {
    font-size: 1.3rem;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--blue);
  }
`

export const GlassIcon = styled(MdSearch)`
  position: absolute;
  left: 0;
  top: 5px;
`
