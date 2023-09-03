import { useContext } from 'react'
import { StudentContext } from './Context/Student'

const Form = () => {
    const {studentName,students,setStudents,setStudentName,editableStudent,setEditableStudent,setEditMode,editMode}=useContext(StudentContext);
        
    const createStudentHandler = (e) => {
        e.preventDefault();
        
        const newStudent={
            id:Date.now() +" ",
            name:studentName
        }
        if (!studentName) {
            return alert (`please provide a valid name`);
        }
        setStudents([...students, newStudent]);
        setStudentName('');
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
  return (
    <div className='from'>
         <form onSubmit={(e) => {
                editMode ? updateHandler(e) : createStudentHandler(e)
            }} className='student-form'>
                <input type="text" value = {studentName} onChange= {(e) => setStudentName(e.target.value)} />
                <button onClick={(e) => {
                    editMode ? updateHandler(e) : createStudentHandler(e)
                }} type="submit">{editMode?"Update Student":"Add Student"}</button>
            </form>
     </div>
  )
}

export default Form