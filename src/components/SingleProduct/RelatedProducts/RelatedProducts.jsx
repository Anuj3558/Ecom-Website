import Products from "../../Products/Products"
import fetchDataFromApi from "../../../utils/api";
import useFetch from "../../../hooks/useHooks";
const RelatedProducts = ({productId,categoryId}) => {
    const {data}=useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    return  <div className="reletex-product">
        <Products HeadingText="Related Products" products={data}/>
    </div>
};

export default RelatedProducts;
