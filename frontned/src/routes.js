import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout.js'
import Home from './containers/HomePage/Home';
import Login from './containers/LoginView/Login'
import Chat from './containers/ChatView/ChatView'
import Signup from './containers/SignupView/Signup'

function BaseRouter() {
    return (
        <div>

            <Switch >
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/chat" component={Chat} />
                   
                </Layout>
            </Switch>

        </div>
    )
}

export default BaseRouter;
