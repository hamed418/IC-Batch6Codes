
import { useState } from "react"
import "./App5.css"

const App5=()=>{
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);
       
    const createStudentHandler = (e) => {
        e.preventDefault();
        if (!studentName) {
            return alert (`please provide a valid name`);
        }
        const newStudent={
            id:Date.now() +" ",
            name:studentName
        }
        setStudents([...students, newStudent]);
        setStudentName('')
    }

     const removeHandler=(id)=>{
            setStudents(students.filter(item=>item.id!==id));
     }
         //to edit a Todo from the todo list:
         const editHandler=(id)=>{
             const toBeEditedStudent=students.find(item=>item.id===id);
             setEditMode(true);
             setEditableStudent(toBeEditedStudent);
             setStudentName(toBeEditedStudent.name);
         }
         //To update a student name!
         const updateHandler=(e)=>{
            e.preventDefault();
               if(!studentName){
               return alert("Please enter a valid name!");
               }
               const newStudentList=students.map(item=>{
                if( item.id===editableStudent.id){
                    item.name=studentName;
                }
                return item;
               })
               setStudents(newStudentList);
               setEditMode(false)
               setEditableStudent(null);
               setStudentName(" ");

         }
             //to make present:
             const presentHandler=(id)=>{
                   const newStudentList=students.map(item=>{
                    if(item.id===id){
                        if(item.isPresent===undefined){
                            item.isPresent=true;
                        }else if(item.isPresent===true){
                         alert(`The student is already in the present list!`);
                        }else if(item.isPresent===false){
                         alert(`To add any student in present list please use accendentally added button!`)
                        }
                    }
                    return item;
                   })
                   setStudents(newStudentList);
             }

             //Absent handler to make student absent:
             const absentHandler=(id)=>{
                const newStudentList=students.map(item=>{
                    if(item.id===id){
                        if(item.isPresent===undefined){
                            item.isPresent=false;
                        }else if(item.isPresent===false){
                         alert(`The student is already in the Abesnt list!`);
                        }else if(item.isPresent===true){
                         alert(`To add any student in absent list please Use accendentally added button!`)
                        }
                    }
                    return item;
                   })
                   setStudents(newStudentList);
             }
             //For accendentally added button:
             const toggleHandler=(id)=>{
                      const newstudenList = students.map(item=>{
                        if(item.id===id){
                            item.isPresent=!item.isPresent;
                        }
                        return item;
                      })
                      setStudents(newstudenList);
             }

        return(
            <div>
            <form onSubmit={(e) => {
                editMode ? updateHandler(e) : createStudentHandler(e)
            }} className='student-form'>
                <input type="text" value = {studentName} onChange= {(e) => setStudentName(e.target.value)} />
                <button onClick={(e) => {
                    editMode ? updateHandler(e) : createStudentHandler(e)
                }} type="submit">{editMode?"Update Student":"Add Student"}</button>
            </form>

            <div className="student-section">
                <div className="list all-student-list">
                    <h2>All Student List</h2>
                    <ul>
                        {students.map(student => (
                            <li>
                                <span>{student.name}</span>
                                <button onClick={() => editHandler(student.id)}>Edit</button>
                                <button onClick={() => removeHandler(student.id)}>Delete</button>
                                <button onClick={() => presentHandler(student.id)}>Make Present</button>
                                <button onClick={() => absentHandler(student.id)}>Make Absent</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="list present-student-list">
                    <h2>Present Student List</h2>
                    <ul>
                        {students.filter(item => item.isPresent === true).map(student => (
                            <li>
                                <span>{student.name}</span>
                                <button onClick={() => toggleHandler(student.id)}>Accidentally Added</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="list absent-student-list">
                    <h2>Absent Student List</h2>
                    <ul>
                        {students.filter(item => item.isPresent === false).map(student => (
                            <li>
                                <span>{student.name}</span>
                                <button onClick={() => toggleHandler(student.id)}>Accidentally Added</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        )
}

export default App5