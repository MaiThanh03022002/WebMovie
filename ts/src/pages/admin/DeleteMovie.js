import React, { useEffect, useState } from 'react'
import "./DeleteMovie.css"
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function DeleteMovie() {

    return (
        <div>
            <div class="container">
                <h2>Xác nhận xóa</h2>
                <p>Bạn có chắc chắn muốn xóa không?</p>
                <div class="button-container">
                
                <Link to ={'/admin'}><button class="cancel">Cancel</button></Link>
                    <button className='button'>Xóa</button>
                </div>
            </div>
            
            </div>
    )
}
