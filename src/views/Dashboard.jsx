import React, { useRef, useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { Container, Row, Col, Form, Button,Navbar,Nav} from 'react-bootstrap';

import axios from 'axios';

import moment from 'moment';
import "../assets/css/dash.css";

import headerIcon from "../assets/icons/extract.svg"


function DashBoard() {
    const [file, setFile] = useState('');

    const [userData, setUserData] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState('');
    const [userDetails, setUserDetails] = useState({});




    const inpRef = useRef();
    const outBox = useRef();


    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }


    async function getUserDetails(){
        await axios({
            method:'get',
            url: process.env.REACT_APP_SERVER_IP + process.env.REACT_APP_SERVER_VERSION + "/fileupload/getUserDetails",
            headers: {
                Authorization: `Bearer ` + sessionStorage.getItem('webData')
            }
        }).then(res=>{
            if (res.status === 200){
                setUserDetails(res.data)
            }
            
        }).catch(err=>{
            console.log(err)
        })

    }

    async function fetchData() {

        const req = await axios({
            method: 'get',
            url: process.env.REACT_APP_SERVER_IP + process.env.REACT_APP_SERVER_VERSION + "/fileupload/getallpdfs",
            headers: {
                Authorization: `Bearer ` + sessionStorage.getItem('webData')
            }
        })
        setUserData(req.data)
    }
  
  
    useEffect(() => {
        getUserDetails();
        fetchData();
    }, []);

    const uploadFile = () => {
        const formData = new FormData();

        formData.append('file', file);

        axios({
            method: 'post',
            url: process.env.REACT_APP_SERVER_IP + process.env.REACT_APP_SERVER_VERSION + "/fileupload/uploadfile",
            headers: {
                Authorization: `Bearer ` + sessionStorage.getItem('webData')
            },
            data: formData,
        }).then(res => {
            setTextAreaValue(textAreaValue + res.data.data.text)
        }).catch(err => console.log(err))

    }

    const clearAreaData = async() =>{
        setTextAreaValue('')
    }

    const selectFile = async(e) =>{
        await axios({
            method: 'get',
            url: process.env.REACT_APP_SERVER_IP + process.env.REACT_APP_SERVER_VERSION + "/fileupload/getspecificpdf/"+e.target.value,
            headers: {
                Authorization: `Bearer ` + sessionStorage.getItem('webData')
            }
        }).then(res=>{
            setTextAreaValue(textAreaValue + res.data.text)
        }).catch(err=>{
            console.log(err)
        })
    }


    if(sessionStorage.getItem('webData')){

    return (


        <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="speechify-navbar text-center">
    <Navbar.Brand>
      <img
        alt=""
        src={headerIcon}
        width="30"
        height="30"
        className="d-inline-block align-top"
      /> {'  '}
      Extractify
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
        <Nav style={{alignItems:"center"}}>
            <Nav.Link>
            <Navbar.Text>
                Signed in as: <span className="text-white">{userDetails.name}</span>
            </Navbar.Text>
            </Nav.Link>
            <Link to={'/user/logout'}>
              <Button variant="outline-light">Logout</Button>

            </Link>
        </Nav>
        
        
    </Navbar.Collapse>   
    
  </Navbar>
                    
            <Container className="speechify-dash-component">

                <Row>
                    <Col md={4}>
                        <div className="speechify-dash-left">
                        <h4 className="text-secondary">
                               Upload a File {' '}

                            </h4>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Upload a File</Form.Label>
                                <Form.File type="file" ref={inpRef} onChange={handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={uploadFile}>
                                Upload
                             </Button>


                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="speechify-dash-right">
                            <h4 className="text-secondary">
                                Previous Uploads
                            </h4>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Select a File</Form.Label>
                                <Form.Control as="select" onChange={selectFile}>
                                  {userData.map((filename, index)=>{
                                      return(
                                          <option key={index} value={filename.id}>{filename.name} ( {moment(filename.timeStamp).format('DD-MM-YY')}) </option>
                                      )
                                  })}
                                </Form.Control>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="speechify-dash-view">
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>File Content </Form.Label><span className="text-secondary" style={{cursor:'pointer'}} onClick={clearAreaData}> Clear Data</span>
                                <Form.Control ref={outBox} as="textarea" rows={20} defaultValue={textAreaValue} />
                            </Form.Group>


                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

else{
    return(
        <Redirect to={{ pathname: '/login' }} />            

    )
}
}   

export default DashBoard;