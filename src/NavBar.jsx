import React  from "react";
import { Link } from 'react-router-dom'
import '../assets/style.css'
export default function NavBar() {
    return (
        <nav className="navbar">
            <link to={'/home'} className='navilink'>Home</link>
            
        </nav>
    )
}