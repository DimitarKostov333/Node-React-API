import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DropdownSearch from "./DropdownSearch";

const DarkNavBar = () => {
   return (
       <Navbar bg="dark" variant="dark" expand="xxl">
           <Container>
               <Navbar.Brand href="#">{process.env.REACT_APP_NAME}</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav" >
                   <DropdownSearch />
               </Navbar.Collapse>
           </Container>
       </Navbar>
   );
}

export default DarkNavBar;