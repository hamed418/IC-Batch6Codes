import { useContext } from 'react'
import { StudentContext } from './Context/Student'

const PresetStudentList = ({toggleHandler}) => {
    const {students}=useContext(StudentContext);
  return (
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
  )
}

export default PresetStudentList