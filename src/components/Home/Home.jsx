import "./Home.scss";
import { useEffect, useContext } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import  fetchDataFromApi  from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
    const { catagories,setCatagories,products, setProducts } = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    },[])
     const  getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then(result => {
             setTimeout(() => {
                   
            }, 1000)
            setProducts(result);
            console.log(products);  
       
            
       
        });
    }
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then(result => {
            setCatagories(result);
            console.log(catagories);
           
        });
    }
    return <div >
        <Banner />
        <div className="main-content">
            <div className="layout">
              
           <Category catagories={catagories} /> 
            </div>
            <Products products={products} HeadingText="Popular Products" />
        </div>

    </div>;
};

export default Home;
