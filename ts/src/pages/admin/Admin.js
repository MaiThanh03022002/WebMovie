import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import {  Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Header_Admin from './Header-Admin';
import axios from 'axios';
export default function Admin() {
    const [Movie, setMovie] = useState([
        
      ]);
      useEffect(() => {
        axios.get("http://localhost:3001/movie").then((response)=>{
          setMovie(response.data);
        });
      }, []);
    return (
        
        <div>
           <Header_Admin></Header_Admin>
            <Table striped bordered hover>
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Ảnh</th>
                        <th>Link phim</th>
                        <th>Mô tả</th>
                        <th>Thể loại</th>
                        <th>Diễn viên</th>
                        <th>Giám đốc</th>
                        <th>Đạo diễn</th>
                        <th>Năm phát hành</th>
                        <th>Thời lượng</th>
                        <th>Phụ đề</th>
                        <th>Đánh giá</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Movie.map((movie) =>
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                           <td>{movie.name}</td>
                           <td> {movie.image_url}</td>
                           <td>{movie.movie_url}</td>
                           <td>{movie.descrip}</td>
                           <td>{movie.Genre}</td>
                           <td>{movie.Actor}</td>
                           <td>{movie.Director}</td>
                           <td>{movie.Writer}</td>
                           <td>{movie.Release}</td>
                           <td>{movie.Duration}</td>
                           <td>{movie.Quality}</td>
                           <td>{movie.Rating}</td>
                            <td className="actions">
                                <Link to={`/admin/edit/${movie.id}`}> <Button className='button-dete'>Edit</Button></Link>
                                <Link to={`/admin/delete/${movie.id}`}> <Button className='button-dete'>Delete</Button> </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className='button-container'>
                <Link to={'/admin/add'}><Button variant="primary" className='button'>Thêm Movie</Button></Link>
                <Link to={'/'}><Button variant="primary" className='button'>Trở lại</Button></Link>
            </div>
           
        </div>
    )
}