import { useState,useEffect } from "react"


function App10() {

    const [notes, setNotes] = useState([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
  
  
    const getAllNotes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/notes`);
        console.log(response);
        // if (!response.ok) {
        //   throw new Error("Something went Wrong")
        // }
        const data = await response.json();
        setNotes(data);
        setIsLoading(false);
        setNoteTitle('')
      } catch (error) {
        console.log(error, 'error');
        setIsLoading(false);
        setErrorMessage(error.message)
      }
    }
  
    // getAllNotes()
  
    const createHandler = (e) => {
      e.preventDefault();
      if (!noteTitle) {
        return alert(`Please provide a valid title`)
      }
      const newNote = {
        id: Date.now() + '',
        title: noteTitle
      }
  
      // setNotes([...notes, newNote]);
      fetch(`http://localhost:3000/notes`, {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(() => {
            getAllNotes()
        })
    }
  
  
    const removeHandler = (id) => {
      fetch(`http://localhost:3000/notes/${id}` , {
        method: "DELETE"
      })
        .then(() => {
            getAllNotes()
        })
    }

    //~~~~~~~~To Edit a data~~~~~~~~~~~~
    const edithandler=(id)=>{
        const havetoedit= notes.find((item)=>item.id===id);
        setEditMode(true)
        setEditableNote(havetoedit);
        setNoteTitle(havetoedit.title)
    }

    //~~~~~~~~~~To Update a notes~~~~~~~~~~~~~~~
    const updateHandler=(e)=>{
        e.preventDefault();
        if(!noteTitle){
            return alert("Please enter avalid name!");
        }
        fetch(`http://localhost:3000/notes/${editableNote.id}`,{
            method:"PATCH",
            body:JSON.stringify({
                title:noteTitle
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(()=>{
            getAllNotes();
            setEditMode(false);
            setEditableNote(null);
            setNoteTitle(" ");
        })

    }
  
    useEffect(() => {
      getAllNotes()
    }, [])
  
    return (
      <div className='App' >
          <form onSubmit={(e)=>{editMode? updateHandler(e):createHandler(e)}}>
              <input type="text" value={noteTitle} onChange = {(e) => setNoteTitle(e.target.value)} />
              <button onSubmit={(e)=>{editMode? updateHandler(e):createHandler(e)}} 
              type='submit'>{editMode ? 'Update Note': 'Create Note'}</button>
          </form>
          <ul>
              {notes.map(note => (
                <li key = {note.id}>
                    <span>{note.title}</span>
                    <button onClick={()=>edithandler(note.id)}>Edit</button>
                    <button onClick={() => removeHandler(note.id)}>Delete</button>
                </li>
              ))}
          </ul>
          {isLoading && (
            <div>Loading..............</div>
          )}
          {errorMessage && (
            <p><i>{errorMessage}</i></p>
          )}
      </div>
    )
  }
  
  /**
   * 1) state ba props change -> Component Rerun -> ReRender
   */
  export default App10;