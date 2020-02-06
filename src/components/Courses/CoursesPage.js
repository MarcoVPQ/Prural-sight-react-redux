import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as courseActions from '../../redux/actions/courseActions'
import { loadAuthors } from '../../redux/actions/authorActions'
import CourseList from './CourseList'



class CoursesPage extends Component {

    componentDidMount(){

        const { courses, authors, loadCourses,loadAuthors } = this.props

        if(courses.length === 0 && authors.length === 0){
            loadCourses()
            .catch(err => {
                alert("Loading courses failed" + err)
            })

            loadAuthors()
            .catch(err => {
                alert("Loading courses failed" + err)
            })
        }
    }

    render() {
        return (
        <Fragment>
            <h2>Courses</h2>
            <CourseList courses={this.props.courses} />
        </Fragment>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    courses: state.authors.length === 0 ? [] : state.courses.map(course => {
        return {
            ...course,
            authorName: state.authors.find(a => a.id === course.authorId).name
        }
    }),
    authors: state.authors
})

const mapDispatchToProps = dispatch => ({
    loadCourses: () => dispatch(courseActions.loadCourses()),
    loadAuthors: () => dispatch(loadAuthors())
})


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)