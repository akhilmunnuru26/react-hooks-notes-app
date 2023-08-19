import {Note, Title, NoteText} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <Note>
      <Title>{title}</Title>
      <NoteText>{note}</NoteText>
    </Note>
  )
}
export default NoteItem
