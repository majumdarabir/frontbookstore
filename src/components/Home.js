import React from 'react';
import './Home.css';
import book from '../assets/img/book.jpg';
import video from '../assets/books.mp4';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:5000/home").then((res)=>{
            if(res.data === "Success"){
                navigate('/home');
            }
            else{
                navigate('/login')
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <div className='Container'>
            <video autoPlay='autoplay' loop='loop' muted className='Video'>
                <source src={video} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='Content'>
                <div className='SubContent'>
                    <h1>Book Catolog</h1>
                    <p>Manage your Books with Ease</p>
                    <button type='button' className='btn btn-outline-dark'>
                        <Link to='/main'>Get started</Link>
                    </button>
                    <img src={book} alt='profile' />
                </div>
            </div>
        </div>
    );
};

export default Home;