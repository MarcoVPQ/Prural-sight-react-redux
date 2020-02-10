import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as courseActions from '../../redux/actions/courseActions'
import { loadAuthors } from '../../redux/actions/authorActions'
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData'
import Spinner from '../common/Spinner'
import { toast } from 'react-toastify'





const ManageCoursesPage = ({  courses, authors, loadCourses,loadAuthors, saveCourse, history,  ...props }) =>  {

    const [ course, setCourse] = useState({...props.course})
    const [ errors, setErrors] = useState({})
    const [ saving, setSaving] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }))
    }

    const handleSave = (e) => {
        e.preventDefault();
        setSaving(true)
        saveCourse(course)
        .then(() => {
            toast.success("Course Saved")
            history.push('/courses')
        })
        .catch(error => {
            setSaving(false)
            setErrors({ onSave: error.message})
        })
    }
    useEffect(() => {

        if(courses.length === 0){
            loadCourses()
            .catch(err => {
                alert("Loading courses failed" + err)
            })

        } else{
            setCourse({ ...props.course })
        }

        if(authors.length === 0){
            loadAuthors()
            .catch(err => {
                alert("Loading courses failed" + err)
            })
        }

    }, [props.course])

   
    return (
    authors.length === 0 && courses.length === 0
     ? <Spinner />
     : <CourseForm 
        course={course} 
        errors={errors} 
        authors={authors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
    /> 
    )
    
}

ManageCoursesPage.propTypes = {
    course: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

const getCourseBySlug = (courses, slug) => {
    return courses.find(course => course.slug === slug) || null
}

const mapStateToProps = (state, ownProps) => {
    const slug = ownProps.match.params.slug
    const course = slug && state.courses.length > 0
     ? getCourseBySlug(state.courses, slug) 
     : newCourse
    return {
    courses: state.courses,
    authors: state.authors,
    course
    }
}

const mapDispatchToProps =  {
    loadCourses: courseActions.loadCourses,
    loadAuthors: loadAuthors,
    saveCourse: courseActions.saveCourse
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage)