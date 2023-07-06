import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function TableStruct() {
    const { data } = useQuery(["users"], () => {
        return axios.get("http://localhost:3001/data").then((res) => res.data);
    });
    console.log(data);

    const [search, setSearch] = useState("");

    return (
        <div>
            <h3 className='pt-5'>Basic API Fetch App</h3>
            <div className='m-5'>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                    <Form.Control onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Users"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Table striped bordered hover size="sm">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Experience</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data &&
                            data.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase());
                            }).map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.age}</td>
                                    <td>{data.experience}</td>
                                    <td>{data.phone}</td>
                                </tr>
                            ))
                        };

                    </tbody>
                </Table>
            </div>

        </div>
    )
}