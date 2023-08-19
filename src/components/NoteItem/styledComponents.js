import styled from 'styled-components'

export const Note = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 10px;
  margin-top: 25px;
  margin-right: 15px;
  width: 100%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`

export const Title = styled.h1`
  color: #475569;
  font-size: 20px;
`

export const NoteText = styled.p`
  color: #334155;
  font-size: 14px;
`
