import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'

import image from './anh/guardians_login.jpg'
import axios from 'axios'
export default function Login() {
  const [email,setEmai]=useState();
  const [password,setPassWord]=useState();
  const [fullname,setFullname]=useState();
  const navigate= useNavigate();
  const login=()=>{
    const data ={fullname:fullname ,email:email,password:password}
    axios.post(`http://localhost:3001/user/login`,data).then((response)=>{
      localStorage.setItem("accessToken", response.data);
      localStorage.setItem("username", response.data.fullname);
    })  
    //  navigate('/movies');
  }
  
  return (
    <div>
        <img className='dn-back' alt='galaxy' src={image}></img>
    <div className="form-container">
    <h2 >Đăng Nhập </h2>
    <form>
        <div className="form-group">
          <label for="email" placeholder="Email dạng @gmail.com">Email:</label>
          <input type="email" id="email" name="email"
          onChange={(event)=>{
            setEmai(event.target.value)
          }}
          />
        </div>
        <div className="form-group">
          <label for="password" placeholder="nhập ít nhất 8 ký tự">Mật khẩu:</label>
          <input type="password" id="password" name="password"
          onChange={(event)=>{
            setPassWord(event.target.value)
          }}/>
        </div>
    
      <div className="form-group">
        
      <span onClick={login}> <Link className='login-button-dn' to={'/movies'}>Đăng nhập</Link></span>
      </div>
      <div className="form-group">
        <span>
      <Link className='login-button-dn' to={'/login'}>Quên mật khẩu</Link></span>
      </div>
      <div className="form-group">
        <span>
      <Link className='login-button-dn' to={'/register'}>Đăng ký</Link></span>
      </div>
      <div className="form-group">
        <span>
      <Link className='login-button-dn' to={'/'}>Quay lại</Link></span>
      </div>
    </form>
  </div>
  </div>
  )
}
