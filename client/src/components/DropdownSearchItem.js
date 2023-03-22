import {NavDropdown} from 'react-bootstrap';
import {useState} from "react";
import React from "react";
import Highlighter from "react-highlight-words";

// Set sub heading styling
const menuItemSubHeading = {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: '1.2em'
}

const highlight = {
    backgroundColor:"yellow"
}

const DropdownSearchItem = ({ searchItems }) => {
    const [projects, setProjects] = useState('');

    const callRestApi = async () => {
        const restEndpoint = process.env.REACT_APP_SERVER_URL + '/projects?searchTerm=' + searchItems;
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();

        const arrayOfLists = jsonResponse.map(
            record => {
                return (
                    <NavDropdown.Item
                        style={menuItemSubHeading}
                        key={record.id}>

                        <Highlighter
                            highlightClassName={highlight}
                            searchWords={[searchItems]}
                            autoEscape={true}
                            textToHighlight={record.name}/>

                        {record.groups.map(group => {
                            return (
                                <NavDropdown.Item onClick={group.url} key={group.name}>
                                    <Highlighter
                                    highlightClassName={highlight}
                                    searchWords={[searchItems]}
                                    autoEscape={true}
                                    textToHighlight={group.name}
                                    />
                                </NavDropdown.Item>
                            )
                        })}
                    </NavDropdown.Item>
                )
            }
        );

        return arrayOfLists;
    };

    React.useEffect(() => {
        callRestApi().then(result => setProjects(result));
    }, [searchItems]);

    return (projects);
}

export default DropdownSearchItem;