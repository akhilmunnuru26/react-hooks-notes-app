import {useState} from 'react'
import NoteItem from '../NoteItem'

import {
  AppTitle,
  BgContainer,
  Card,
  TitleInputElement,
  NoteInputElement,
  AddButton,
  EmptyNotesBgContainer,
  EmptyImage,
  EmptyNotesTitle,
  EmptyNotesMsg,
  NotesContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const addNotes = event => {
    event.preventDefault()

    const noteObj = {id: notesList.length, title, note}
    setNotesList(prevState => [noteObj, ...prevState])

    setTitle('')
    setNote('')
  }

  const getTitle = event => {
    if (event.target.value !== '') {
      setTitle(event.target.value)
    }
  }

  const getNotes = event => {
    if (event.target.value) {
      setNote(event.target.value)
    }
  }

  const renderNotes = () => (
    <NotesContainer>
      {notesList.map(eachItem => (
        <NoteItem key={eachItem.id} noteDetails={eachItem} />
      ))}
    </NotesContainer>
  )

  const renderEmptyNotesView = () => (
    <EmptyNotesBgContainer>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesTitle>No Notes Yet</EmptyNotesTitle>
      <EmptyNotesMsg>Notes you add will appear here</EmptyNotesMsg>
    </EmptyNotesBgContainer>
  )

  const renderViews = () =>
    notesList.length !== 0 ? renderNotes() : renderEmptyNotesView()

  return (
    <BgContainer>
      <AppTitle>Notes</AppTitle>
      <Card onSubmit={addNotes}>
        <div>
          <TitleInputElement
            type="text"
            value={title}
            onChange={getTitle}
            placeholder="Title"
          />
          <NoteInputElement
            value={note}
            onChange={getNotes}
            placeholder="Take a note..."
          />
        </div>
        <AddButton type="submit">Add</AddButton>
      </Card>
      {renderViews()}
    </BgContainer>
  )
}

export default Notes
