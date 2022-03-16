import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

export default function TelentSignUp() {

    const [inputval, setINP] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let { name, value } = e.target;
        setINP({ ...inputval, [name]: value })
      }
    const { first_name, last_name, username, email, password } = inputval;
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const res = await fetch("http://wren.in:3200/api/sign-up/talent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name, last_name, username, email, password
            })
        });
        const data = await res.json();
        console.log(data);

        if (!first_name || !last_name || !username || !email || !password) {
            toast.error('User Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            
            console.log(inputval);
            toast.success('User Added Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setINP("");
        }
      }
    
    return <section>
        <Container>
            <Row>
                <Col lg={7} md={ 7} className="mx-auto">
                    <div className="form-tab">
                        <h1 className='heading'>Create a Your Telent Account</h1>
                        <div className="form-sec">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name *</Form.Label>
                                    <Form.Control type="text" placeholder='FirstName' name='first_name' value={first_name} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>LastName *</Form.Label>
                                    <Form.Control type="text" placeholder='LastName' name='last_name' value={last_name} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" placeholder='userName' name='username' value={username} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="email" name='email' value={email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className='check-sec' controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label=" I accept the " />
                                    <a href="/">Terms and Conditions</a>
                                </Form.Group>
                                <Form.Group className="mt-4 text-center">
                                    <button className="btn" type="submit">SIGN UP</button>
                                    <ToastContainer />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}
