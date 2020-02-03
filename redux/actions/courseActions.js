import { CREATE_COURSE } from './actionTypes'

export const createCourse =  course => ({
    type: CREATE_COURSE,
    course
})