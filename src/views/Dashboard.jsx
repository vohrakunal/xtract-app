import React, { useRef, useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import axios from 'axios';

import moment from 'moment';
import "../assets/css/dash.css";

function DashBoard() {
    const [file, setFile] = useState('');

    const [userData, setUserData] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState('');


    const inpRef = useRef();
    const outBox = useRef();


    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
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
            setTextAreaValue(res.data.data.text)
        }).catch(err => console.log(err))
    }

    const selectFile = async(e) =>{
        await axios({
            method: 'get',
            url: process.env.REACT_APP_SERVER_IP + process.env.REACT_APP_SERVER_VERSION + "/fileupload/getspecificpdf/"+e.target.value,
            headers: {
                Authorization: `Bearer ` + sessionStorage.getItem('webData')
            }
        }).then(res=>{
            setTextAreaValue(res.data.text)
        }).catch(err=>{
            console.log(err)
        })
    }



    return (


        <div>
            <Container className="speechify-dash-component">
                <Row>
                    <Col md={4}>
                        <div className="speechify-dash-left">
                        <h4 className="text-secondary">
                               Upload a File
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
                                Past Uploads
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
                                <Form.Label>File Content</Form.Label>
                                <Form.Control ref={outBox} as="textarea" rows={20} defaultValue={textAreaValue} />
                            </Form.Group>


                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}


export default DashBoard;