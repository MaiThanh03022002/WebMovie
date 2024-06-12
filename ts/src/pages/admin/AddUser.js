import React from 'react'
import './AddUser.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function AddUser() {
    const [users, setUsers] = useState({
        
    });

    const navigate= useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3001/user`, users);
            navigate('/user');
        } catch (error) {
            console.error(error);
        }
        
    };
    return (
        <div>
            <h2>Thêm mới User</h2>
            <form className='adduser-form'>
                <div className='adduser-form-div'>
                    <label for="tourName">Fullname:</label>
                    <input className='adduser-text' placeholder=' nhập tên đầy đủ' type="text"
                    onChange={(event) =>
                        setUsers({ ...users, fullname: event.target.value })}/>
                </div>
                
                <div className='adduser-form-div'>
                    <label for="tourStartDate">Email:</label>
                    <input type="email"  placeholder='email dạng @gmail.com' 
                    onChange={(event) =>
                        setUsers({ ...users, email: event.target.value })}/>
                </div>
                
                <div className='adduser-form-div'>
                    <label for="tourEndDate" >Password:</label>
                    <input type="password" placeholder='vui lồng nhập từ 8 ký tự trở lên'
                    onChange={(event) =>
                        setUsers({ ...users, password: event.target.value })} />
                </div>
                <div className='button-add'>
                <br></br>
                <br></br>
                <Link to ={'/user'}><input type="submit" className='button' value="Lưu User" onClick={handleSubmit}/></Link>
                <br></br>
                <br></br>
                <Link to ={'/user'}><button  className='button'>Trở lại</button></Link></div>
            </form>
            
        </div>
    );
}
