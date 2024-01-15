import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";


const Header = () => {
    const  {cartCount}=useContext(Context);
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowcart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const HandelScroll = () => {
        const offset = window.scrollY;
        if (offset > 90) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", HandelScroll);
    }, [])

const nav =useNavigate();
    return <>
    <header className={`main_header ${scrolled ? 'sticky-header' : ''}`}>
        <div className="header-content">
            <ul className="left">
                <li></li>
                <li onClick={()=>nav("/")}>
                    home
                </li>
                <li>
                    about
                </li>
                <li>catagoreies</li>
            </ul>
            <div className="center" onClick={()=>nav("/")}>Mystore</div>
            <div className="right">
                <TbSearch onClick={()=>setShowSearch(true)}/>
                <AiOutlineHeart />
                <span className="cart_icon" onClick={()=>setShowcart(true)}>
                    <CgShoppingCart />
                    {cartCount==0?"":<span>{cartCount}</span>}
                </span>
            </div>
        </div>
    </header>
{showCart&&<Cart setShowcart={setShowcart}/>}
{showSearch&&<Search setShowSearch={setShowSearch}/>}

    </>

};

export default Header;
