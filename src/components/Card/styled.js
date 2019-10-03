import styled, { css } from 'styled-components'
import { MdLocationCity } from 'react-icons/md'

export const CardWrap = styled.li`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--light-grey);
  transition: 0.2s all ease;

  ${props =>
    props.hoverStyle &&
    css`
      cursor: pointer;
      &:hover {
        background-color: var(--light-blue);
      }
    `}

  ${props =>
    props.checkedStyle &&
    css`
      background-color: var(--light-blue);
      border-color: white;
      cursor: pointer;
    `}
`

export const CityIcon = styled(MdLocationCity)`
  font-size: 3.5rem;
  background: linear-gradient(120deg, var(--blue) 50%, var(--dark-blue) 50%);
  border-radius: 50%;
  padding: 5px;
  color: white;
  margin: 0 10px;
`

export const Name = styled.div`
  flex: 1;

  & > h3 {
    font-size: 1.4rem;
    font-weight: 700;
  }

  & > h4 {
    font-size: 1.2rem;
    color: var(--grey);
  }
`

export const IconClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  color: var(--wine);
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease;
  padding: 0;
  outline: none;

  &:hover {
    color: var(--red);
  }
`
