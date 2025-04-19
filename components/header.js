import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import img from'../Assets/bgimage.jpg';

export default function Header() {
  return (
    <>
    <div className='header'>
      <h1 id="name">Weather App</h1>
      {/* <link>
      <button type="submit" to="/">About Us</button>  
      </link> */}
      <Link id="link" to="/weather">
      <button type="submit" >Know your Weather</button>
      </Link>
    </div>
    </>
  )
}
