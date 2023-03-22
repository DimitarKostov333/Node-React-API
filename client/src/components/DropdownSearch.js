import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import DropdownSearchItems from "./DropdownSearchItem";

const DropdownSearch = () => {
    const [input, setInput] = useState('');

    return (
        <Nav className="me-auto col-xxl" >
            <NavDropdown title="Go To Projects"
                         autoClose="outside"
                         tabIndex="0"
                         style={{width:'30em'}}>

                <NavDropdown.Item>
                    <Form.Control type="text"
                                  value={input}
                                  onChange={event => setInput(event.target.value)} />
                </NavDropdown.Item>

                <DropdownSearchItems searchItems={input} />

            </NavDropdown>
        </Nav>
    );
}

export default DropdownSearch;