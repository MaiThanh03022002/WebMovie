import React, { useEffect, useState } from 'react'
import "./DeleteMovie.css"
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function DeleteUser() {
    let { id } = useParams();
    const [user, setUser] = useState({
        
    });

    useEffect(() => {
        axios.get(`http://localhost:3001/user/byId/${id}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching movie:', error);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(123)
        try {
            await axios.delete(`http://localhost:3001/user/byId/${id}`, user);
            
        } catch (error) {
            console.error(error);
        }
        
    };
    return (
        <div>
            <div class="container">
                <h2>Xác nhận xóa</h2>
                <p>Bạn có chắc chắn muốn xóa không?</p>
                <div class="button-container">
                
                <Link to ={'/user'}><button class="cancel">Cancel</button></Link>
                    <button className='button'
                    onClick={handleSubmit}
                    >Xóa</button>
                </div>
            </div>
            
            </div>
    )
}
