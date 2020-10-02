
import React from 'react';

import { Link } from 'react-router-dom';


import { Container, Form, Button, Image, Alert } from 'react-bootstrap';

import "../assets/css/signup.css";

import SpeechIcon from "../assets/icons/public-speaking.svg";

import axios from 'axios';
class Signup extends React.Component {

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

    signupFormUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    onBtnClick = async() => {
        if(this.state.password === this.state.cnfpassword){
            await axios({
                method:'post',
                url: process.env.REACT_APP_SERVER_IP + process.env.REACT_APP_SERVER_VERSION + "/user/adduser",
                data:{
                    name: this.state.username,
                    email:this.state.email,
                    password: this.state.password
                }
            }).then(res=>{
                if(res.data.successmsg){
                    this.setState({ msgShow: true, variant: "success", msg: res.data.successmsg })
                }
                if(res.data.errmsg){
                    this.setState({ msgShow: true, variant: "danger", msg: res.data.errmsg })
                }

            }).catch(err=>{
                this.setState({ msgShow: true, variant: "danger", msg: err })

            })
        }
        else{
            this.setState({ msgShow: true, variant: "danger", msg: "Passwords Donot Match!" })
        }
        
    }

    render() {
        return (
            <div>
                <Container className="text-center speechify-signup-container">
                    {this.messageBox()}
                    <Image className="speechify-header-icon" src={SpeechIcon}/>

                <div className="speechify-login text-secondary">
                    <h2 className="mb-3">Signup</h2>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name!" name="username" required  onChange={this.signupFormUpdate} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="yourmail@email.com" name="email" required onChange={this.signupFormUpdate}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Secured Password" name="password" required onChange={this.signupFormUpdate}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPasswordConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="cnfpassword" required onChange={this.signupFormUpdate}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={()=>this.onBtnClick()}>
                            Get On Board!
                        </Button>
                        <div class="mt-2">
                            Already Signedup? <Link to="/login">Login Now!</Link>
                        </div>
                    
                </div>
                    
                </Container>


            </div>
        );
    }

}

export default Signup;