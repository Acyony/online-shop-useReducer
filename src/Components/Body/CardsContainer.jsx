import React, {useEffect, useReducer} from "react";
// import getData from "../../Api/Data.js";
import reducer from "../../Reducer/ProductsReducer";
import ProductCard from "./ProductCard";
import styles from "./CardsContainer.module.css";

export default function CardsContainer() {
    const [products, dispatch] = useReducer(reducer, {products: []});

    useEffect(() => {
        (async () => {
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();
            dispatch({type: "getProducts", payload: data});
        })();
    }, []);
    return (
        <div className={styles.product_container}>
            {products.products.map((product) => (
                <ProductCard
                    src={product.image}
                    name={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
}

