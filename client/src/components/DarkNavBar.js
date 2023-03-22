import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

const DarkNavBar = () => {

   return (
       <Navbar bg="dark" variant="dark" expand="xxl">
           <Container>
               <Navbar.Brand href="#">Optimi App</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="me-auto lg">
                       <NavDropdown title="Go To Projects"
                                    id="basic-nav-dropdown"
                                    autoClose="outside"
                                    tabIndex="0">
                           <NavDropdown.Item>
                               <Form.Control type="email" placeholder="Enter email" />
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.2">
                               Another action
                           </NavDropdown.Item>
                       </NavDropdown>
                   </Nav>
               </Navbar.Collapse>
           </Container>
       </Navbar>
   );
}

export default DarkNavBar;