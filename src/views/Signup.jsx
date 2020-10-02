
import React from 'react';

import { Container, Form, Button, Image } from 'react-bootstrap';

import "../assets/css/signup.css";

import SpeechIcon from "../assets/icons/public-speaking.svg";

import axios from 'axios';
class Signup extends React.Component {



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
                console.log(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
        else{
            console.log("passwords donot match")
        }
        
    }

    render() {
        return (
            <div>
                <Container className="text-center">
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
                    
                </div>
                    
                </Container>


            </div>
        );
    }

}

export default Signup;