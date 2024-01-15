import "./Search.scss";
import { useState } from "react";
import useFetch from "../../../hooks/useHooks";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/earbuds-prod-1.webp"

import { MdClose } from "react-icons/md";
const Search = ({ setShowSearch }) => {
    const [query, setquery] = useState("");
    const handleChange = (event) => {
        let txt = event.target.value;
setquery(txt);
    }
   
    let {data}=useFetch(`/api/Products?populate=*&filters[Title][$contians]=${query}`)
    if(!query.length){
        data=null;

    }

    const nav = useNavigate();
    return <div className="search-model">
        <div className="form-feild">
            <input type="text" autoFocus placeholder="Search your device" value={query} onChange={handleChange} />
            <MdClose onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-res-content">
            <div className="search-result">
          {  data?.data?.map((item)=>(<div className="serch-result-item" onClick={
            ()=>{
                nav("/product/"+item.id)
                setShowSearch(false); 
            }
          }>
                    <div className="img-continer">
                        <img src={process.env.REACT_APP_DEV_URL+item.attributes.img?.data[0].attributes.url} alt="pdoc1" />
                    </div>
                    <div className="prod-detiald">
                        <div className="prod-name">
                            <span className="prod-name">{item.attributes.Title}
                            </span>

                        </div>
                        <span className="prod-desc">
                            Decition
                        </span>
                    </div>
                    </div>
                    ))}
                
            </div>
        </div>
    </div>;
};

export default Search;
