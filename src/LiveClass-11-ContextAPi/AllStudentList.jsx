import { useContext } from 'react'
import { StudentContext } from './Context/Student'

const AllStudentList = () => {
             const {setEditMode,setEditableStudent,setStudentName,students,setStudents,}=useContext(StudentContext);
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
  return (
   
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
  )
}

export default AllStudentList