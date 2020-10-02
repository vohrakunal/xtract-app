import React from 'react'
import { Redirect ,Route } from 'react-router-dom'

class PublicRoute extends React.Component {

    render() {
        const isAuthenticated = sessionStorage.getItem('webData');
       
        return isAuthenticated ? (
            <Redirect to={{ pathname: '/user/dashboard/' }} />            
        ) : (
            <Route component={this.props.render} path={this.props.path} />
        );
    }
}

export default PublicRoute;