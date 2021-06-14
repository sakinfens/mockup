import React from "react"
import "../Style/header.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSoundcloud} from 'react-icons/fa';


function Header(){
   
    const navInfo = ["ABOUT US", "PUBLIC INFORMATION", "PROGRAMS & INCENTIVES", "STRATEGIC INDUSTRY SUPPORT", "CAREERS"];
    const socials = ["FaceBook", "Twitter", "in", "SoundCloud"];
    return(
        <nav>
            <ul className="socials">
                <li><FaFacebookF/></li>
                <li><FaTwitter/></li>
                <li><FaLinkedinIn/></li>
                <li><FaSoundcloud/></li>
            </ul>
            <ul className="nav">
            {navInfo.map((nav, id) => (
                <li>{nav}</li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Header;