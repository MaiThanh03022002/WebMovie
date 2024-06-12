import React from 'react'
import  { useEffect,useState } from "react";
import './Movies-detail.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './footer'
import movie_play from './movie/the-super-mario-bros-movie-trailer-1_h1080p.mov'
import {useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
export default function Movies_detail() {
   let { id }= useParams();
    const [movie,setMovie]= useState({

    });
      const navigate= useNavigate();
      useEffect(() => {
        axios.get(`http://localhost:3001/movie/byId/${id}`).then((response)=>{
            setMovie(response.data);
        });
      },[]);
  return (
    <div>
        <Header/>
        <body>
  <div class="movie-detail">
  <div className="controller-play">
       <video controls className='controller-player'>
        <source src= {movie_play} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
      <div class="row">
      <div class="body-movie-left">
         <img class="img-movie"  src={movie.image_url} alt="Lỗi"/>
      </div>
      
      <div class="body-movie-right">
            <div class="body-top">
              <h1>{movie.name}</h1>
               <div class="body-top-des">
                  <button><i class="fa-duotone fa-check"></i>Theo dõi</button>
                  <p>{movie.descrip}</p>
               </div>
            </div>
            <div class="body-body">
             <div class="body-body-left">
               <p><strong>Genre: </strong>
                  <a href="https://phimtuoitho.tv/genre/adventure.html">{movie.Genre}</a>,
                  {/* <a href="https://phimtuoitho.tv/genre/animation.html">Animation</a>,
                  <a href="https://phimtuoitho.tv/genre/comedy.html">Comedy</a>,
                  <a href="https://phimtuoitho.tv/genre/family.html">Family</a>,
                  <a href="https://phimtuoitho.tv/genre/fantasy.html">Fantasy</a>,
                  <a href="https://phimtuoitho.tv/genre/phim-long-tieng.html">Lồng Tiếng</a>,
                  <a href="https://phimtuoitho.tv/genre/phim-chieu-rap.html">Phim Chiếu Rạp</a> */}
               </p>
               <p><strong>Actor: </strong>
               {movie.Actor}
               </p>
               <p><strong>Director:</strong>
               {movie.Director}
               </p>
               <p><strong>Writer: </strong>
               {movie.Writer}
               </p>
               <p><strong>Release: </strong>
               {movie.Release}
               </p>
            </div>
            <div class="body-body-right">
               <p><strong>Duration:</strong>
               {movie.Duration}
               </p>
               <p><strong>Quality:</strong>
                  <span class="label label-primary">{movie.Quality}</span>
               </p>
               <p><strong>Rating:</strong>
               {movie.Rating}
               </p>
               
            </div>
            </div>
      </div>
    </div>
   <Footer></Footer>
    </div>
   </body>

    </div>
  )
}