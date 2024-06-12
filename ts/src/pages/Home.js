import React from 'react'
import './Home.css'
import { Link ,useNavigate} from 'react-router-dom'
import Header from './Header'
import image from './anh/guardians.jpg'
export default function Home() {
  const username = localStorage.getItem("username");
  const navigate=useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <div>
        <Header/>
        <img className='hero' alt='galaxy' src={image}></img>
        <div className='content'>
                  {!localStorage.getItem('accessToken')&&  (
                        <>
                        <h1 className='title'>Đăng nhập để có trải nghiệm xem phim tuyệt vời</h1>
                            <Link className='login-button' to={'/login'}>Đăng nhập</Link>
                       </>
                    )}
                    {localStorage.getItem('accessToken')&&  (
                       <> <h1 className='title'>Chúc bạn xem những bộ phim tuyệt vời</h1>
                        <Link className='login-button' onClick={logout} to={'/'}>Đăng xuất</Link>
                      </>
                    )}
        </div>
    </div>
  )
}