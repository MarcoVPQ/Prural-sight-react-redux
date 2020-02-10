import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './common/Header'
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import NotFound from './NotFound';
import CoursesPage from './Courses/CoursesPage';
import ManageCoursesPage from './Courses/ManageComponentPage';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () =>  (
    <div className="container">
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course/:slug" component={ManageCoursesPage} />
            <Route path="/course" component={ManageCoursesPage} />
            <Route component={NotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
    </div>
)

export default App;
