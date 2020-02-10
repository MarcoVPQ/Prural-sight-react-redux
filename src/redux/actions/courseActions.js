import { 
CREATE_COURSE, 
LOAD_COURSES_SUCCESS, 
UPDATE_COURSE_SUCCESS,
CREATE_COURSE_SUCCESS
 } from './actionTypes'

import * as courseApi from '../../api/courseApi'
import { beginApiCall, apiCallFail } from './apiStatusActions';


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
        dispatch(beginApiCall())
        return courseApi.getCourses()
        .then(courses => {
            dispatch(loadCoursesSuccess(courses))
        })
        .catch(err => {
            throw err
        })
    }
}

export const updateCourseSuccess =  (course) => ({
    type: UPDATE_COURSE_SUCCESS,
    course
})

export const createCourseSuccess = (course) => ({
    type: CREATE_COURSE_SUCCESS,
    course
})

export const saveCourse = (course) => {
    return (dispatch) => {
        dispatch(beginApiCall())
        return courseApi
        .saveCourse(course)
        .then(savedCourse => {
            course.id
            ? dispatch(updateCourseSuccess(savedCourse))
            : dispatch(createCourseSuccess(savedCourse))
        })
        .catch(error => {
            dispatch(apiCallFail(error))
            throw error
        })
    }
}