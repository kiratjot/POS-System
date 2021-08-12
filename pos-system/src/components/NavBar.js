import React from "react";
import {
    Navbar,
    Container,
    Nav
} from "react-bootstrap";

export default function NavBar() {
    return (
        <React.Fragment>
            <Navbar bg="primary" variant="dark">
                <Container>

                    <Nav className="mx-auto" >
                        <Nav.Link href="#home">
                            <img
                                className=""
                                src={require("../assets/images/mainLogo.png")}
                                alt="First slide"
                                style={{
                                    width: 40,
                                    height: 30,
                                    marginRight: 10,
                                    borderRadius: 100,
                                }}
                            />POS System</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>


        </React.Fragment>
    );
}