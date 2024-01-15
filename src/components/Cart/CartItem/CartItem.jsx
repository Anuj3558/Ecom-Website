import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const {cartItems,HandleRemoteFromCart,HandleCartProductQuantity}=useContext(Context);
    return <div className="cart-products">
        {(cartItems)?.map((item)=>(
          <div className="cart-product">
          <div className="img-continer">
              <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="pdoc1" />
          </div>
          <div className="prod-detiald">
              <div className="prod-name1">
              <span className="prod-name">{item.attributes.Title}</span>
              <span> <MdClose className="close-btn" onClick={()=>{
                HandleRemoteFromCart(item)
              }} />
              </span>
              </div>
              
             {/* <div className="quntity-button"> */}
                          {/* <span onClick={HandleCartProductQuantity("dec",item)}>-</span>
                          <span>{item.attributes.quntity}</span>
                          <span onClick={HandleCartProductQuantity("inc",item)}>+</span> */}
                      {/* </div>  */}
                      <div className="text">
                          <span>{item.attributes.quntity}</span>
                          <span>X</span>
                          <span className="highlight">&#8377;{item.attributes.Price*item.attributes.quntity}</span>
                      </div>
              
          </div>
      </div>  
        ))}
        
    </div>
};

export default CartItem;
