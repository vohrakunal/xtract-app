import React from 'react'
import { Redirect ,Route } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    render() {
      
        const isAuthenticated = sessionStorage.getItem('webData');
        return isAuthenticated ? (
            <Route component={this.props.render} path={this.props.path} />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;