import { useContext } from 'react'
import { StudentContext } from './Context/Student'
import PresetStudentList from './PresetStudentList'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'

const StudentSection = () => {
    const {students,setStudents}=useContext(StudentContext);
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
  return (
    <div className="student-section">
         <AllStudentList/>
       <PresetStudentList
         toggleHandler={toggleHandler}
       />
       <AbsentStudentList
        toggleHandler={toggleHandler}
       />
    </div>
  )
}

export default StudentSection