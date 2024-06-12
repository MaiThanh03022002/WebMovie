import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./footer";
import './Favourite.css';

import { Link, useFetcher } from "react-router-dom";
import axios from "axios";
export default function Favourite() {
  const [movies, setMovies] = useState([
  ]);
  useEffect(()=>{
    axios.get("http://localhost:3001/movie").then((response)=>{
        setMovies(response.data)
    })
  },[]);
  return (
    <div>
      <Header />
      <div className="movies-body">
        <div className="movies-top">
            <h1>Phim yêu thích</h1>
            <button></button>
        </div>

        <div className='movies-container-top'>
            {movies.map((movies) => (
            <div className="movies-slot" key={movies.id}>
                <img src={movies.image_url} alt={movies.name} />
                <p>{movies.name}</p>
            </div>
            ))}
        </div></div>
      <Footer />
    </div>
  );
}
