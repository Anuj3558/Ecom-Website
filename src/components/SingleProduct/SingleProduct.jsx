import "./SingleProduct.scss";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useContext } from "react";
import { useState } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FalinkedinIn,
    FaPinterest,
    FaCartPlus,

} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";
import useFetch from "../../hooks/useHooks";
import { Context } from "../../utils/context";
const SingleProduct = () => {
    const [quntity,setqutity]=useState(1);
    const { HandleCart } = useContext(Context)
    const{ id}=useParams();
    const increment = () =>{
        setqutity(preValue => preValue+1)
    }
    const decrement = ()=>{
        
        setqutity((preValue) => {
            if(preValue === 1)
            {
                return 1;
            }
            else
            {
               return preValue-1  ;
            }
        });
    }
    const {data}=useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    if(!data) return;
    let pd=data?.data[0];
    const product=data.data[0].attributes;
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_DEV_URL+product?.img?.data[0]?.attributes?.url } alt="prodimage" />
                </div>
                <div className="right">
                    <span className="name">{product.Title}</span>
                    <span className="price">&#8377;{product.Price}</span>
                    <span className="desc">{product.Desc}</span>
                    <div className="cart-buttons">
                        <div className="quntity-button">
                            <span onClick={decrement} >-</span>
                            <span>{quntity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="Add-to-cart-button" onClick={()=>{
                            console.log(pd,quntity);
                            HandleCart(pd,quntity);
                            setqutity(1);
                             }}>
                            <FaCartPlus  size={20}  />
                            Add to cart
                        </button>
                    </div>
                    <span className="divider" />
                    <div className="info-item">
                        <span className="text-bold">
                        
                        
                            Category:
                            <span>{product.categories.data[0].attributes.Title} </span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                                <FaFacebookF size={16} />
                                <FaTwitter sixe={16} />
                                <FaInstagram size={16} />
                                <FaPinterest size={16} />
                            </span>
                        </span>


                    </div>

                </div>
            </div>
            <RelatedProducts  productId={id} categoryId={product.categories.data[0].id}/>
        </div>
    </div>
};

export default SingleProduct;
