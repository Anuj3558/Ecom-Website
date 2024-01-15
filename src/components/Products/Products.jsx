import "./Products.scss";
import Product from "../Products/Product/Product"
const Products = ({products,innerPage,HeadingText}) => {
    return <div className="products-contianer">
        {!innerPage&&<div className="section-heading">
        {HeadingText}
           </div>}
            <div className="products">
                {products?.data.map((item)=>(
                    <Product key={item.id} id={item.id} data={item.attributes}/>
                ))}
            
            </div>
        </div>
   
};

export default Products;
