
import React, { } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginScreen.css";

export default function HomeScreen() {

    return (
        <React.Fragment>
            <div className="row-12 my-5 py-5 " >
                <div className="col-12 pt-5">
                    <h1>Welcome Back!</h1>
                </div>

                <div className="col-12 my-5 d-flex justify-content-center ">
                    <Form style={formStyle}>
                        <Form.Group className="mb-3" controlId="formGridName">
                            <Form.Label>UserID:</Form.Label>
                            <Form.Control type="text" placeholder="Enter user ID" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
}

const formStyle = {
    color: "white",
    textAlign: "left",
    backgroundColor: "#93CBFF",
    padding: "10px 20px",
    fontFamily: "Arial",
    boxShadow: "6px 6px 12px rgba(0, 0, 0, .5)",
    borderRadius: "8px",
    width: "65%",
};