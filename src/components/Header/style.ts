import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 1rem;
`
export const ContentButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const ButtonMap = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
`

export const ButtonCart = styled.button`
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  cursor: pointer;
`
