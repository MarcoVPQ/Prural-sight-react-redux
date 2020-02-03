import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as courseActions from '../../../redux/actions/courseActions'

class CoursesPage extends Component {

    state = {
        course: {
            title: ""
        }
    }

     handleChange = e => {
        const course = { ...this.state.course, title: e.target.value }
        this.setState({ course })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createCourse(this.state.course)
        this.setState({ course: {
            ...this.state.course,
            title: ""
        }})
    }


    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>Courses</h2>
            <h3>Add course</h3>
            <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.course.title}
                />

            <input
                type="submit" 
                value="Save"
                />
                {
                    this.props.courses.map( course => (
                        <div key={course.title}>{course.title}</div>
                    ))
                }
        </form>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
}

const mapStateToProps = ({ courses }) => ({
    courses
})

const mapDispatchToProps = dispatch => ({
    createCourse: course => dispatch(courseActions.createCourse(course))
})


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)