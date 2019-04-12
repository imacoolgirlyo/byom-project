import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import About from './containers/About';
import Projects from './containers/Projects';
import Notfound from './containers/Notfound';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/about"> About </Link></li>
                <li> <Link to="/projects"> Project </Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects} />
                <Route component={Notfound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
