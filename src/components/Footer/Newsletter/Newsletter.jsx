import "./Newsletter.scss";
import React, { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa"
const Newsletter = () => {
    const[scrolled,setScrolled]=useState(false);
    let scroll=window.scrollY;
    function HandelScroll(){
        if(scroll>1400)
        {
            setScrolled(true);
        }
        else
        {
            setScrolled(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',HandelScroll);
    })
    return <div className="newsletter-section">
        <div className={scrolled?"newsletter-content lazy-load2":"newsletter-content"}>
            <span className="small-text">
             News letter
            </span>
            <span className="big-text">
                signup for latest update
                </span>
                <div className="form">
                    <input type="text"  placeholder="Email Adress"/>
                    <button>Subcribe</button>
                </div>
                <div className="text">
                    Will be used in accordance with our privacy policy
                </div>
                <div className="social-icons">
                    <div className="icons">
                        <FaFacebookF />
                    </div>
                    <div className="icons">
                        <FaInstagram />
                    </div>
                    <div className="icons">
                        <FaLinkedinIn />
                    </div>
                    <div className="icons">
                        <FaTwitter />
                    </div>
                </div>
        </div>
    </div>
};

export default Newsletter;
