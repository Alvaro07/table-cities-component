import styled from 'styled-components'

export const Wrap = styled.section`
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(74, 74, 74, 0.1);
`

export const Header = styled.header`
  padding: 15px;
  border-bottom: 1px solid var(--light-grey);

  & > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
  }
`

export const Main = styled.main`
  @media (min-width: 768px) {
    display: flex;
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 400px;

    &:last-child {
      @media (max-width: 768px) {
        border-top: 1px solid var(--light-grey);
      }
    }

    :not(:last-child) {
      border-right: 1px solid var(--light-grey);
    }
  }
`

export const ExtraField = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 15px;
  border-bottom: 1px solid var(--light-grey);
  height: 45px;
`

export const ItemsCount = styled.p`
  font-weight: 700;
  color: var(--grey);
  font-size: 1.3rem;
`

export const ClearButton = styled.button`
  margin-left: auto;
  font-weight: 700;
  color: var(--blue);
  transition: 0.3s all ease;
  cursor: pointer;
  font-size: 1.3rem;

  background: none;
  border: none;
  outline: none;

  &:hover {
    color: var(--dark-blue);
  }
`
