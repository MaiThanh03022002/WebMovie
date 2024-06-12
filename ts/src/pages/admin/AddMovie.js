import React from 'react'
import './AddMovie.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
export default function AddMovie() {
    
    const [movie, setMovie] = useState({
        
    });

    const navigate= useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3001/movie`, movie);
            navigate('/admin');
        } catch (error) {
            console.error(error);
        }
        
    };
    return (
        <div>
            <h2>Thêm mới Movie</h2>
            <form className='adduser-form'>
                <div className='adduser-form-div'>
                    <label for="tourName">Tên:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, name: event.target.value })
                }/>
                </div>
                
                <div className='adduser-form-div'>
                    <label for="tourStartDate">Ảnh:</label>
                    <input type="text" onChange={(event) =>
                    setMovie({ ...movie, image_url: event.target.value })
                } />
                </div>
                
                <div className='adduser-form-div'>
                    <label for="tourEndDate" >Link phim:</label>
                    <input type="text" name ="phim" onChange={(event) =>
                    setMovie({ ...movie, movie_url: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Mô tả:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie,  descrip: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Thể loại:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, Genre: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Diễn viên:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, Actor: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Giám đốc:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, Director: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Đạo diễn:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, Writer: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Năm phát:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, Release: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Thời Lượng:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, Duration: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Phụ đề:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, Quality: event.target.value })
                }/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Đánh giá:</label>
                    <input className='adduser-text' type="text" onChange={(event) =>
                    setMovie({ ...movie, Rating: event.target.value })
                }/>
                </div>
                <div className='button-add'>
                <br></br>
                <br></br>
                <Link to ={'/admin'}><input type="submit" className='button' value="Lưu User" onClick={handleSubmit}/></Link>
                <br></br>
                <br></br>
                <Link to ={'/admin'}><button  className='button'>Trở lại</button></Link></div>
            </form>
            
        </div>
    );
}
