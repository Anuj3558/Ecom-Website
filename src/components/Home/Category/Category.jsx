import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";
const Category = ({ catagories }) => {
   
    const nav=useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
            {catagories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={()=>{nav(`/category/${item.id}`)}}>
                        <img src={process.env.REACT_APP_DEV_URL+item.attributes.img.data.attributes.url} alt="cat" />
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Category;
