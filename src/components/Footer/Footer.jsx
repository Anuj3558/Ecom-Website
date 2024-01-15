import "./Footer.scss";
import React ,{useState,useEffect}from "react";
import {
    FaLocationArrow, FaMobileAlt, FaEnvelope
} from "react-icons/fa";
import Payment from "../../assets/payments.png";


const Footer = () => {
    const [scrolled,setScrolled]=useState(false);
    const HandelScroll=()=>{
     const offset=window.scrollY;
     if(offset>1300){
setScrolled(true);
     }
     else{
        setScrolled(false);
     }
    }
    useEffect(()=>{
        window.addEventListener("scroll",HandelScroll);
    },[])
    return <div className="footer">
        <div className={scrolled?"footer-content lazy-load" : "footer-content remove-lazy"}>
            <div className="col">
                <div className="title">
                    About
                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At est perspiciatis, blanditiis incidunt nihil facere corporis
                    architecto quisquam molestiae omnis
                    a reiciendis praesentium cumque atque, fuga voluptas vero! Nesciunt, officiis.
                </div>
            </div>
            <div className="col"><div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        123 Main Street,
                        Nashik City,
                        Nashik District,
                        Maharashtra - 422001,
                        India.
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone: +91 80105555419
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        anujloharkar@gmail.com
                    </div>
                </div>

            </div>

            <div className="col"><div className="title">Categories</div>
                <div className="text">Headphone</div>
                <div className="text">Smart Watch</div>
                <div className="text">Speakers</div>
                <div className="text">Wireless ear buds</div>
                <div className="text">Home thetre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col"><div className="title">Pages</div>
            <div className="text">Home</div>
                <div className="text">About </div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & conditons</div>
                <div className="text">Contact us</div><div className="title">
            </div></div>
        </div>
        <div className="bottom-bar">
            <div className="bottombar-content">
                <div className="text">
                    MYSTORE 2023 CREATED BY ANUJ E-COMMERCE SOLUTIONS
                </div>
                <img src={Payment} alt="paymet" />
            </div>
        </div>
    </div>
};

export default Footer;
