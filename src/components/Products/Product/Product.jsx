import { useNavigate } from "react-router-dom";
import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({id,data}) => {
    const nav = useNavigate();
    return <div className="product-card" onClick={()=>nav(`/product/${id}`)}>
        <div className="thumnail">
<img src={process.env.REACT_APP_DEV_URL+data?.img?.data[0]?.attributes?.url} alt="" />
        </div>
        <div className="product-detials">
        <span className="name">{data?.Title}</span>
        <span className="price">&#8377; {data?.Price}</span>
        </div>
    </div>
};

export default Product;
