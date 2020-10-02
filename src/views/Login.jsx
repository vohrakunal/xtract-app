
import React from 'react';

import { Link, Redirect } from 'react-router-dom';


import { Container, Form, Button, Image, Alert } from 'react-bootstrap';


import "../assets/css/auth.css";

import LoginIcon from "../assets/icons/privacy.svg";

import axios from 'axios';

class Login extends React.Component {

    state = {};

    messageBox = () => {
        if (this.state.msgShow) {
            return (
                <Alert variant={this.state.variant} onClose={() => this.setState({ msgShow: false })} dismissible>
                    {this.state.msg}
                </Alert>
            );
        }
    }

    loginFormUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    componentDidMount = () => {
        if (sessionStorage.getItem('webData') && sessionStorage.getItem('userID')) {
            this.setState({ isLoggedIn: true })
        }
    }

    onBtnClick = async () => {
        await axios({
            method: 'post',
            url: process.env.REACT_APP_SERVER_IP + process.env.REACT_APP_SERVER_VERSION + "/user/userlogin",
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(res => {
            if (res.status === 200) {
                this.setState({ msgShow: true, variant: "success", msg: "Logged In!" })
                sessionStorage.setItem('webData', res.data.token);
                sessionStorage.setItem('userID', res.data.id);
                this.setState({ loggedin: true });

            }
            else {
                this.setState({ msgShow: true, variant: "danger", msg: "This Should not happen!" })
            }

        }).catch(err => {
            this.setState({ msgShow: true, variant: "danger", msg: "Invalid Credentials" })

        })


    }

    render() {
        if (this.state.loggedin === true) {
            return (
                <Redirect to={{ pathname: '/signup' }} />
            );
        }
        else {
            return (
                <div>
                    <Container className="text-center speechify-auth-container">
                        {this.messageBox()}
                        <Image className="speechify-header-icon" src={LoginIcon} />

                        <div className="speechify-auth text-secondary">
                            <h2 className="mb-3">Login</h2>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="yourmail@email.com" name="email" required onChange={this.loginFormUpdate} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Secured Password" name="password" required onChange={this.loginFormUpdate} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={() => this.onBtnClick()}>
                                Login!
                        </Button>
                            <div className="mt-2">
                                Still Not Signedup? <Link to="/signup">Signup Today!</Link>
                            </div>

                        </div>

                    </Container>


                </div>
            );
        }
    }

}

export default Login;