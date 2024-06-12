import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, Link,useParams } from 'react-router-dom';
const EditMovie = () => {
    let { id }= useParams();
    const [movie,setMovie]= useState({
    });
    const [isLoading, setIsLoading] = useState(true);
      const navigate= useNavigate();
      useEffect(() => {
        axios.get(`http://localhost:3001/movie/byId/${id}`)
          .then((response) => {
            setMovie(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching movie:', error);
            setIsLoading(false);
          });
      }, [id]);
      const handleNameChange = (e) => {
        setMovie({
          ...movie,
          name: e.target.value,
        });
      };
      const handleChange = (e) => {
        setMovie({
          ...movie,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:3001/movie/byId/${id}`, movie);
            navigate('/movie');
        } catch (error) {
            console.error(error);
        }
        
    };
  return (
    <div>
      <h1>Edit Movie</h1>
      <form className='adduser-form'>
                <div className='adduser-form-div'>
                    <label for="tourName">Tên:</label>
                    <input className='adduser-text' type="text"
                    value={movie.name}
                    onChange={handleNameChange}/>
                </div>
                
                <div className='adduser-form-div'>
                    <label for="tourStartDate">Ảnh:</label>
                    <input type="text"
                    value={movie.image_url}
                    onChange={handleChange}  />
                </div>
                
                <div className='adduser-form-div'>
                    <label for="tourEndDate" >Link phim:</label>
                    <input type="text" 
                    value={movie.movie_url}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Mô tả:</label>
                    <input className='adduser-text' type="text"
                    value={movie.descrip}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Thể loại:</label>
                    <input className='adduser-text' type="text"
                    value={movie.Genre}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Diễn viên:</label>
                    <input className='adduser-text' type="text"
                    value={movie.Actor}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Giám đốc:</label>
                    <input className='adduser-text' type="text"
                    value={movie.Director}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Đạo diễn:</label>
                    <input className='adduser-text' type="text"
                    value={movie.Writer}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Năm phát:</label>
                    <input className='adduser-text' type="text"
                    value={movie.Release}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Thời Lượng:</label>
                    <input className='adduser-text' type="text"
                    value={movie.Duration}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Phụ đề:</label>
                    <input className='adduser-text' type="text"
                    value={movie.Quality}
                    onChange={handleChange}/>
                </div>
                <div className='adduser-form-div'>
                    <label for="tourName">Đánh giá:</label>
                    <input className='adduser-text' type="text"
                    value={movie.Rating}
                    onChange={handleChange}/>
                </div>
                <div className='button-add'>
                <br></br>
                <br></br>
                <input className='button' onClick={handleSubmit} type="submit" value="Update Movie"/>
                <br></br>
                <br></br>
                <Link to ={'/admin'}><button  className='button'>Trở lại</button></Link></div>
            </form>
    </div>
  );
};

export default EditMovie;
