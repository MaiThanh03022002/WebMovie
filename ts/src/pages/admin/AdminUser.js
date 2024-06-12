import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminUser.css'
import {  Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Header_Admin from './Header-Admin';
import axios from 'axios'
export default function AdminUser() {

    const [ User, setUser]=useState([]);
    useEffect(() => {
      axios.get("http://localhost:3001/user").then((response)=>{
        setUser(response.data);
      });
    }, []);
    return (
        
        <div>
           <Header_Admin></Header_Admin>
               <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên người dùng</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {User.map((user) => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.password++}</td>
                            <td className="actions">
                                <Link to={`/user/edit/${user.id}`}><button className='button-dete'>Edit</button></Link>
                                <Link to={`/user/delete/${user.id}`}><button className='button-dete'>Delete</button></Link>
                            </td>
                        </tr>
                    )}

                </tbody>
            </Table>
            <div className='button-container'>
                <Link to={'/user/add'}><Button variant="primary" className='button'>Thêm User </Button></Link>
                <Link to={'/'}><Button variant="primary" className='button'>Trở lại</Button></Link>
            </div>
        </div>
        
    )
}