import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Users from './Users';
import UserInfo from './UserInfo';

const App = () => {

    return (
        <Router>
            <Navbar />
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/users/:id/info" component={UserInfo} />


                </Switch>
            </main>
        </Router>
    );
}

export default App;