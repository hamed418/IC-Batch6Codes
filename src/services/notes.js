const baseUrl = `http://localhost:4000/notes`;


export const getAllnotes=async()=>{
    const response = await fetch(baseUrl);
    return await response.json();
}


export const getNoteByID = async (category) => {
    const response = await fetch(`${baseUrl}?category=${category}`);
    return await response.json()
}

export const CreateNotes = async(note)=>{
    return await fetch(baseUrl,{
        headers:{
            'Content-type': 'application/json'
        },
        method:"POST",
        body:JSON.stringify(note)
    })
}

export const UpdateNotes= async(note)=>{
    return await fetch(`baseUrl/${note.id}`,{
        headers:{
            'Content-type':'application/json'
        },
        method:"PUT",
        body:JSON.stringify(note)
    })
}

export const DeleteNotes=async(id)=>{
    return await fetch(`${baseUrl}/${id}`,{
        headers:{
            "Content-type":"application/json"
        },
        method:"DELETE",
    })
}

