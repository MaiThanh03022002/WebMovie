import {Link,useNavigate} from "react-router-dom";
import "./Header.css"

export default function Header(){
    const navigate=useNavigate();
    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        navigate("/");
      };
    const username = localStorage.getItem("username");
    return(
        <nav className="Navitems">
            <Link className="home" to={'/'}><h1 className="home-h1">Web xem phim</h1></Link>
            <ul>
            <form className="nav-link-sea" method="get" >
		        <div className="input-group">
		          <input type="text" className ="form-control-input" placeholder="nhập ít nhất 3 ký tự"/>
		          <span className="input-group-btn">
		          <Link className="nav-link" to={'/'}>
                        <i className="fa-solid fa-house">Tìm kiếm</i> 
                    </Link>
		          </span>
	    	</div></form>
                <li>
                    <Link className="nav-link" to={'/'}>
                        <i className="fa-solid fa-house">Home</i> 
                    </Link>
                </li>
                
                <li className="nav-link-ul"> 
                    <i  className="fa-solid fa-umbrella-beach"><Link className="nav-link" to={'/movies'}>Movies</Link></i> 
                    <ul className="sub-menu">
                        <Link><li>Comendy</li></Link>
                        <Link><li>TV show</li></Link>
                        <Link><li>Fantasy</li></Link>
                        <Link><li>Mature</li></Link>
                        <Link><li>Cartoon</li></Link>
                        <Link><li>Action</li></Link>
                    </ul>
                </li>
                <li>
                    <Link className="nav-link" to={'/favourite'}>
                        <i className="fa-solid fa-cart-shopping">Theo dõi</i> 
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
                        <Link className='login-button' onClick={logout} to={'/'}>Đăng xuất</Link>
                        </ul>
                    </Link></>
                    )}
                </li>
            </ul>
        </nav>
    );

}