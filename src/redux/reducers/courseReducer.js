import { LOAD_COURSES_SUCCESS, CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS } from '../actions/actionTypes'

const authorReducer = (state = [], action) => {

    switch(action.type){
        case LOAD_COURSES_SUCCESS:
          return action.courses  
        case CREATE_COURSE_SUCCESS:
         return [...state, { ...action.course } ]
        case UPDATE_COURSE_SUCCESS:
          return state.map(course => 
          course.id === action.course.id ? action.course: course
          )
        default:
         return state
    }
}


export default authorReducer