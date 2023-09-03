import React, { useContext } from 'react'
import { StudentContext } from './Context/Student'

const AbsentStudentList = ({toggleHandler}) => {
    const StudentCtx = useContext(StudentContext);
  return (
    <div className="list absent-student-list">
                    <h2>Absent Student List</h2>
                    <ul>
                        {StudentCtx.students.filter(item => item.isPresent === false).map(student => (
                            <li>
                                <span>{student.name}</span>
                                <button onClick={() => toggleHandler(student.id)}>Accidentally Added</button>
                            </li>
                        ))}
                    </ul>
                </div>
  )
}

export default AbsentStudentList