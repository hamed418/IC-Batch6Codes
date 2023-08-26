import { useState } from "react";
import NoteList from "./NoteList";
import Form from "./Form";

const App4 = () => {
    const [noteTitle, setNoteTitle] = useState("");
    const [notes, setnotes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);


    return (
        <div className="App4">
            <Form
                noteTitle={noteTitle}
                notes={notes}
                editMode={editMode}
                editableNote={editableNote}
                setNoteTitle={setNoteTitle}
                setnotes={setnotes}
                setEditMode={setEditMode}
                setEditableNote={setEditableNote}
            />
            <NoteList
                notes={notes}
                 editableNote={editableNote}
                setNoteTitle={setNoteTitle}
                 setnotes={setnotes}
                setEditMode={setEditMode}
                 setEditableNote={setEditableNote}
            />
        </div>
    )
}
export default App4