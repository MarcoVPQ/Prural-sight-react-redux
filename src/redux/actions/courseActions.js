import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from './actionTypes'
import * as courseApi from '../../api/courseApi'


export const createCourse =  course => ({
    type: CREATE_COURSE,
    course
})


export const loadCoursesSuccess = (courses) => {
    return {
        type: LOAD_COURSES_SUCCESS,
        courses
    }
}


export const loadCourses = () => {

    return (dispatch) => {
        return courseApi.getCourses()
        .then(courses => {
            dispatch(loadCoursesSuccess(courses))
        })
        .catch(err => {
            throw err
        })
    }
}