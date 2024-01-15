import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import {loadStripe }from "@stripe/stripe-js";
import { MakePaymentRequest } from "../../utils/api";
const Cart = ({ setShowcart }) => {
    const {cartItems,cartSubTotal}=useContext(Context);
    const stripepromis=loadStripe(process.env.REACT_APP_STRIPE_KEY);
    const HandelChekeout=async()=>{
         try {
            const stripe=await stripepromis;
         const res=await MakePaymentRequest.post("/api/orders",{
            products:cartItems,
         })
         await stripe.redirectToCheckout({
            sessionId:res.data.stripeSession.id,
         })
         } catch (error) {
            console.log(error);
         }
    }
    return <div className="cart-panel">
        <div className="opquce-layer">

        </div>
        <div className="cart-content">
            <div className="cart-header">
                <div className="heading">
                    shopping cart
                </div>
                <div className="close-button" onClick={() => setShowcart(false)}>
                    <MdClose />
                    <span className="text">
                  
                    </span>
                </div>

            </div>
        {!cartItems?.length &&<div className="empty-cart">
        <BsCartX />
        <span>No Products</span>
        <button className="return" onClick={() => setShowcart(false)}>Return to Shop</button>
    </div>}
            
               {!!cartItems?.length &&<> <CartItem />
                <div className="cart-footer">
                    <div className="sub-total">
                        <span className="text">
                            SubTotal:
                        </span>
                        <span className="text total">
                            &#8377;{cartSubTotal}
                        </span>
                        <div className="button">
                            <button className="chekout-cta" onClick={()=>{
                                HandelChekeout();
                            }}>Chekout</button>
                        </div>
                    </div>
                </div>
                </>}
          
        </div>
    </div>
};

export default Cart;
