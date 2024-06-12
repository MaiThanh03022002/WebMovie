import {Link} from "react-router-dom";
import "./Header-Admin.css"
import { useNavigate } from "react-router-dom";
export default function Header_Admin(){
    const navigate=useNavigate();
    const username = localStorage.getItem("username");
    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        navigate("/");
      };
    return(
        <nav className="Navitems">
            <Link className="home" to={'/'}><h1 className="home-h1">Web xem phim</h1></Link>
            <ul>
                <li>
                    <Link className="nav-link" to={'/admin'}>
                        <i className="fa-solid fa-house"></i> Quản lý Movie
                    </Link>
                </li>
                
                <li>
                    <Link className="nav-link" to={'/user'}>
                        <i class="fa-solid fa-umbrella-beach"></i> Quản lý User
                    </Link>
                </li>
                <li>
                    {!localStorage.getItem('accessToken')&&  (
                        <>
                        <Link className="nav-link">
                            <i className="fa-solid fa-user">Tài Khoản</i> 
                        </Link></>
                    )}
                    {localStorage.getItem('accessToken')&&  (
                        <><Link className="nav-link">
                        <i className="fa-solid fa-user">{username}</i> 
                        <ul className="out-menu">
                        <Link className='login-button' onClick={logout} to={'/admin'}>Đăng xuất</Link>
                        </ul>
                    </Link></>
                    )}
                </li>
            </ul>
        </nav>
    );

}