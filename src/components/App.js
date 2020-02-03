import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './common/Header'
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import NotFound from './NotFound';
import CoursesPage from './Courses/CoursesPage';

const App = () =>  (
    <div className="container">
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route component={NotFound} />
        </Switch>
    </div>
)

export default App;
