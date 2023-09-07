
import PresetStudentList from './PresetStudentList'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'

const StudentSection = () => {
  return (
    <div className="student-section">
         <AllStudentList/>
       <PresetStudentList/>
       <AbsentStudentList/>
    </div>
  )
}

export default StudentSection