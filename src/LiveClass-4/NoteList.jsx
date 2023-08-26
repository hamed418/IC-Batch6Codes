

const NoteList = (props) => {

    const { notes,setNoteTitle, setnotes,setEditMode,setEditableNote}= props;

                     //~~~~~~~~~~~~~~~~~~To Edit an Item in the list~~~~~~~~~~~~~
    const edithandler = (id) => {
        const TobeEditedNote = notes.find((item) => item.id === id);
        setEditMode(true);
        setEditableNote(TobeEditedNote);
        setNoteTitle(TobeEditedNote.title);
    }
           //~~~~~~~~~~~~~~~~~~~~~~To Delete A Node~~~~~~~~~~~~~~~~~
    const removehandler = (id) => {
        const newnotes = notes.filter((item) => item.id !== id);
        setnotes(newnotes);
    }
  return (
    <ul>
                {notes?.map((item) => (
                    <li key={item.id}>
                        {item.title}
                        <button onClick={() => edithandler(item.id)}>Edit</button>
                        <button onClick={() => removehandler(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
  )
}

export default NoteList