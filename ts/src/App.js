import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Movies_detail from './pages/Movies-detail';
import Movies from './pages/Movies';
import Admin from './pages/admin/Admin';
import AdminUser from './pages/admin/AdminUser';
import Favourite from './pages/Favourite';
import AddUser from './pages/admin/AddUser';
import AddMovie from './pages/admin/AddMovie';
import EditMovie from './pages/admin/EditMovie';
import EditUser from './pages/admin/EditUser';
import DeleteMovie from './pages/admin/DeleteMovie';
import DeleteUser from './pages/admin/DeleteUser';
function App(){

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/movies/:id' element={<Movies_detail></Movies_detail>}></Route>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/user' element={<AdminUser></AdminUser>}></Route>
          <Route path='/favourite' element={<Favourite></Favourite>}></Route>
          <Route path='/user/add' element={<AddUser></AddUser>}></Route>
          <Route path='/admin/add' element={<AddMovie></AddMovie>}></Route>
          <Route path='/admin/edit/:id' element={<EditMovie></EditMovie>}></Route>
          <Route path='/user/edit/:id' element={<EditUser></EditUser>}></Route>
          <Route path='/admin/delete/:id' element={<DeleteMovie></DeleteMovie>}></Route>
          <Route path='/user/delete/:id' element={<DeleteUser></DeleteUser>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;