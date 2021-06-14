import React from "react";
import "./../Style/footer.css"


function Footer(){
    const content = ["Industry Resources","Procurement","Job Opportunities","News & Events"];
    return(
        <div className="footer-container">

        
        <footer>
            <div>
                <h1>Contact Us</h1>
                <p>West State Street,<br/> Trenton, NJ 08625-0990</p>
                <h2>Email Us</h2>
            </div>
            <ul>
            {content.map((content, id) => (
                <li>{content}</li>
                ))}
            </ul>
        </footer>
        </div>
    )
}

export default Footer;