import React, { useEffect,useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import './Movies.css';
import axios from "axios";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
export default function Movies() {
  const [movies, setMovies] = useState([
  ]);
  // let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:3001/movie").then((response)=>{
      setMovies(response.data);
    });
  }, []);
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
