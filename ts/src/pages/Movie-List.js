import React, { useEffect,useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import './MovieList.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
export default function MovieList() {
    let { genre } = useParams();
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      // Gọi API hoặc xử lý logic để lấy danh sách phim theo thể loại từ server
      // Ví dụ, sử dụng axios để gửi yêu cầu GET tới API
      axios.get(`/api/movies?genre=${genre}`)
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [genre]);
  
  return (
    <div>
      <Header />
      <div className='movies-container' >
        {movies.map((movies) => (
          <Link to={`/movies/${movies.id}`} key={movies.id}>
          <div className="movies-slot">
            <img src={movies.image_url} alt={movies.name} />
            <p>{movies.name}</p>
          </div>
        </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
