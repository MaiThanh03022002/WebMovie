import React,{useEffect,useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Register.css'
import axios from 'axios'
import image from './anh/guardians_login.jpg'
export default function Register() {
  const [users, setUsers] = useState({
        
  });

  const navigate= useNavigate();
  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          await axios.post(`http://localhost:3001/user`, users);
          navigate('/login');
      } catch (error) {
          console.error(error);
      }
      
  };
  return (
    <div>
        <img className='dn-back' alt='galaxy' src={image}></img>
    <div className="form-container">
    <h2 >Đăng ký </h2>
    <form>
        <div className="form-group">
          <label for="fullname" placeholder="fullname">Fullname:</label>
          <input type="text" id="fullname" name="fullname"
          onChange={(event) =>
            setUsers({ ...users, fullname: event.target.value })}/>
        </div>
        <div className="form-group">
          <label for="email" placeholder="Email dạng @gmail.com">Email:</label>
          <input type="email" id="email" name="email"
           onChange={(event) =>
            setUsers({ ...users, email: event.target.value })}/>
        </div>
        <div className="form-group">
          <label for="password" placeholder="nhập ít nhất 8 ký tự">Mật khẩu:</label>
          <input type="password" id="password" name="password"
          onChange={(event) =>
            setUsers({ ...users, password: event.target.value })}/>
        </div>
        <div className="form-group">
          <label for="password" placeholder="nhập ít nhất 8 ký tự">Nhập lại mật khẩu:</label>
          <input type="password" id="password" name="password"/>
        </div>
    
      <div className="form-group">
      <input type="submit" className='login-button-dn' style={{ width:"300px",border:"none"}} value="Đăng ký" onClick={handleSubmit}/>
      </div>
      <div className="form-group">
        <span>
      <Link className='login-button-dn' style={{ width:"120px"}}to={'/login'}>Đăng nhập</Link></span>
      </div>
      <div className="form-group">
        <span>
      <Link className='login-button-dn'style={{ width:"120px"}} to={'/'}>Quay lại</Link></span>
      </div>
    </form>
  </div>
  </div>
  )
}
