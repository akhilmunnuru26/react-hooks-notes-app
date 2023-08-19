import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    align-items: center;
    height: 45vh;
  }
`

export const AppTitle = styled.h1`
  font-size: 25px;
  color: #4c63b6;
  font-family: 'Bree Serif';
  text-align: center;
`

export const Card = styled.form`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 900px;
  }
`

export const NoteInputElement = styled.textarea`
  height: 35px;
  width: 100%;
  border: none;
  outline: none;
`
export const TitleInputElement = styled.input`
  height: 35px;
  width: 100%;
  border: none;
  outline: none;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  height: 35px;
  width: 70px;
  border: 0px;
  outline: none;
  border-radius: 8px;
  color: #ffffff;
  align-self: flex-end;
`
export const EmptyImage = styled.img`
  width: 100px;
`
export const EmptyNotesTitle = styled.h1`
  color: #334155;
  font-size: 22px;
  margin-bottom: 0px;
`

export const EmptyNotesMsg = styled.p`
  color: #334155;
  font-size: 14px;
  color: #aab8c8;
`

export const EmptyNotesBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`
export const NotesContainer = styled.ul`
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`
