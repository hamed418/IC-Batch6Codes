import {createContext, useReducer} from 'react';

import { studentReducer } from './../../LiveClass-12_UseReducerHook/Reducer';

export const StudentContext = createContext();

const initialState  = {
    studentName: '',
    editMode: false,
    students: [],
    editableStudent: null
}

const StudentProvider = ({children}) => {
    // console.log(children);
    // const [studentName, setStudentName] = useState('');
    // const [students, setStudents] = useState([]);
    // const [editMode, setEditMode] = useState(false);
    // const [editableStudent, setEditableStudent] = useState(null);

    const [studentStates, dispatch] = useReducer(studentReducer, initialState)

    return (
        <StudentContext.Provider value={{studentStates, dispatch}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider
