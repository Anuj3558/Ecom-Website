import { useParams } from "react-router-dom";
import "./Category.scss";
import Product from "../Products/Products";
import useFetch from "../../hooks/useHooks";

const Category = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator
    }

    if (error) {
        return <div>Error loading data. Please try again later.</div>; // Handle error
    }

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="title">
                    {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.Title}
                    </div>
                    <div className="product-contianer">
                    <Product products={data} innerPage={true} />
                    </div>
                    
               
            </div>
        </div>
    );
};

export default Category;