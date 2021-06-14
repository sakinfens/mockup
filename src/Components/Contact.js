import React from "react"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSoundcloud} from 'react-icons/fa';
import "./../Style/contact.css"

function Contact(){
    return(
        <div id="contact">
        <div className="contact-cover">
        <div className="container ">

        
            <div className="title">
                <p>SUBSCRIBE TO OUR NEWS LETTER</p>
            </div>
            <section >

                <form>
                    <br/><input type="text" email="email" placeholder="janedoe@gmail.com"/>
                    
                    <input type="submit" value="Submit" />
                </form>
                <ul>
                    <li><FaFacebookF size={30}/></li>
                    <li><FaTwitter/></li>
                    <li><FaLinkedinIn/></li>
                    <li><FaSoundcloud/></li>
                </ul>
            </section>
            </div>
            </div>
        </div>
    )
}

export default Contact; 