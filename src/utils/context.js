import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const AppContext = ({ children }) => {
    const [catagories, setCatagories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const navloc = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [navloc])
    useEffect(() => {
        let count = 0;
        cartItems.map((item) => count += item.attributes.quntity);
        setCartCount(count);

        let subttt = 0;
        cartItems.map((item) => (
            subttt += item?.attributes?.Price * item?.attributes?.quntity
        ))
        setCartSubTotal(subttt);
    }, [cartItems]);
    const HandleCart = (product, quntity) => {
        let item = [...cartItems];
        let index = item.findIndex(p => p.id === product.id);
        if (index !== -1) {
            item[index].attributes.quntity += quntity;

        }
        else {
            product.attributes.quntity = quntity;
            item = [...item, product];
        }
        setCartItem(item)
    }
    const HandleRemoteFromCart = (product) => {
        let item = [...cartItems];
        item = item.filter(p => p.id !== product.id);
        setCartItem(item);

    }
    const HandleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);

        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) {
                // If the quantity is already 1, do nothing
                return;
            } else {
                items[index].attributes.quantity -= 1;
            }
        }

        setCartItem(items);
    };

    return (
        <Context.Provider value={{
            catagories,
            setCatagories,
            products,
            setProducts,
            cartItems,
            setCartItem,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            HandleCart,
            HandleRemoteFromCart,
            HandleCartProductQuantity

        }}>
            {children}
        </Context.Provider>
    )
}
export const Context = createContext();
export default AppContext;