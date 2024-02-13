import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import '/src/assets/navbar.css'

function NavigationBar() {
    return (
        <> <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#hom e">MailElectronics</Navbar.Brand>
                <Nav className="me-sm-autoo">
                    <Nav.Link href="#signin">Sign In</Nav.Link>
                    <Nav.Link href="#cart">Register</Nav.Link>
                    <Nav.Link href="#cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default NavigationBar;