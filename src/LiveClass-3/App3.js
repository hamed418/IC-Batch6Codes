import React, { useState } from "react";

const Todo = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [notes, setnotes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);

    //~~~~~~~~~~~~~~~~~~To Edit an Item in the list~~~~~~~~~~~~~
    const edithandler = (id) => {
        const TobeEditedNote = notes.find((item) => item.id === id);
        setEditMode(true);
        setEditableNote(TobeEditedNote);
        setNoteTitle(TobeEditedNote.title);
    }
    //~~~~~~~~~~~~~~~~~~~~~To update a title~~~~~~~~~~~~~~~
    const updatehandler = (e) => {
        e.preventDefault();
        if (!noteTitle) {
            return alert("please enter a valid name!");
        }
        const newnoted = notes.map((item) => {
            if (item.id ===editableNote.id) {
                item.title = noteTitle;
            }
            return item;
        }


        )
        setnotes(newnoted)
        setEditMode(false)
        setEditableNote(null)
        setNoteTitle('');
    }
    //~~~~~~~~~~~~~~~~~~~~~~To Delete A Node~~~~~~~~~~~~~~~~~
    const removehandler = (id) => {
        const newnotes = notes.filter((item) => item.id !== id);
        setnotes(newnotes);
    }
    //~~~~~~~~~~~~~~~~~~~~~~ To create a new note:~~~~~~~~~~~~~
    const Createhandler = (e) => {
        e.preventDefault();
        if (!noteTitle) {
            return alert("Please Enter a valid name");
        }
        const newnote = {
            id: Date.now() + '',
            title: noteTitle
        }
        setnotes([...notes, newnote]);
        setNoteTitle('');
    }
    return (
        <div className="TodoList">
            <form onSubmit={(e) => {
               editMode ? updatehandler(e) : Createhandler(e)
            }}>
                <input value={noteTitle} type="text" onChange={(event) => setNoteTitle(event.target.value)} />
                <button onClick={(e) => {
                    editMode ? updatehandler(e) : Createhandler(e)
                }} type="submit">{editMode ? 'Update Notes' : 'Add Notes'}</button>
            </form>
            <ul>
                {notes?.map((item) => (
                    <li key={item.id}>
                        {item.title}
                        <button onClick={() => edithandler(item.id)}>Edit</button>
                        <button onClick={() => removehandler(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo