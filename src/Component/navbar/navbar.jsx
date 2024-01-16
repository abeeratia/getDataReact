import React, { useState } from "react";
import image from '../../image/secrit.jpg'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <div>
      <nav>
        <div className="navbar px-5 d-flex  ">
          <div className="d-flex justify-content-between align-items-center ">
           
            <img src={image} className="imgewidth" alt="" />
           
         {open &&  <div className="socialiconmediem">
            <ul className="d-flex flex-column">
           <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaGooglePlus /></li>
           </ul> 
            </div> }
          </div>  
          <div className="navlinks">
             <ul className="d-flex  " >
                <li><Link to="/">Home</Link></li>
                <li><a href="#Tours">Tours</a></li>
                <li><a href="#reviews">reviews</a></li>
             </ul>
          </div>
          <div className="socialicons">
           <ul className="d-flex">
           <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaGooglePlus /></li>
           </ul>
          </div>
          <button className="btntoggle" onClick={()=>setOpen(!open)}><AiOutlineMenu /></button>
        </div>
       
      </nav>
    </div>
  );
}
