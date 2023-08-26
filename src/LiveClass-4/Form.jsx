

const Form = (props) => {

    //~~~~~~~~~~~~~~~~~~~~~To update a title~~~~~~~~~~~~~~~
    const updatehandler = (e) => {
        e.preventDefault();
        if (!props.noteTitle) {
            return alert("please enter a valid name!");
        }
        const newnoted = props.notes.map((item) => {
            if (item.id === props.editableNote.id) {
                item.title = props.noteTitle;
            }
            return item;
        })
         
        props.setnotes(newnoted)
        props.setEditMode(false)
        props.setEditableNote(null)
        props.setNoteTitle('');
    }
    //~~~~~~~~~~~~~~~~~~~~~~ To create a new note:~~~~~~~~~~~~~
    const Createhandler = (e) => {
        e.preventDefault();
        if (!props.noteTitle) {
            return alert("Please Enter a proper name");
        }
        const newnote = {
            id: Date.now() + '',
            title: props.noteTitle
        }
        props.setnotes([...props.notes, newnote]);
        props.setNoteTitle('');
    }
    return (
        <form onSubmit={(e) => {
            props.editMode ? updatehandler(e) : Createhandler(e);
        }}>
            <input value={props.noteTitle} type="text" onChange={(event) => props.setNoteTitle(event.target.value)} />
            <button onClick={(e) => {
                props.editMode?updatehandler(e) : Createhandler(e);
            }} type="submit">{props.editMode?"Update Notes" : "Add Notes"}</button>
        </form>
    )
}

export default Form