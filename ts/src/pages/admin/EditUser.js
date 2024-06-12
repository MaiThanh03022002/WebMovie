import React from 'react'
import './AddUser.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function EditUser() {
    return (
        <div>
            <h2>Edit User</h2>
            <form className='adduser-form'>
                <div className='adduser-form-div'>
                    <label for="tourName">Fullname:</label>
                    <input className='adduser-text' placeholder=' nhập tên đầy đủ' type="text"/>
                </div>
                
                <div className='adduser-form-div'>
                    <label for="tourStartDate">Email:</label>
                    <input type="text"  placeholder='email dạng @gmail.com' />
                </div>
                
                <div className='adduser-form-div'>
                    <label for="tourEndDate" >Password:</label>
                    <input type="text" placeholder='vui lồng nhập từ 8 ký tự trở lên' />
                </div>
                <div className='button-add'>
                <br></br>
                <br></br>
                <Link to ={'/user'}><button className='button'>Lưu user</button></Link>
                <br></br>
                <br></br>
                <Link to ={'/user'}><button  className='button'>Trở lại</button></Link></div>
            </form>
            
        </div>
    );
}
