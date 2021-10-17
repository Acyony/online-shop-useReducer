import React, {useEffect, useReducer} from 'react';
import styles from "./SideBar.module.css";

import FilterCategory from './FilterProduct.jsx';
import productsReducer from "../../Reducer/ProductsReducer.js";
import categoriesReducer from "../../Reducer/CategoriesReducer.js";

export default function SideBar() {
    const [category, dispatch] = useReducer(categoriesReducer, {categories: []})
    const [products, dispatchProducts] = useReducer(productsReducer, {products: []})

    useEffect(() => {
        (async () => {
                let res = await fetch("https://fakestoreapi.com/products/categories");
                let data = await res.json();
                dispatch({type: 'getCategories', payload: data})

            }
        )()
    }, [])

    const onChange = function (event) {
        dispatchProducts({type: "filterProducts", payload: event.target.value});
    }

    return (
        <>
            <div className={styles.sideBarStyle}>
                <nav>
                    <h2>Shop</h2>
                    <ul className={styles.sideBarUlStyle}>
                        <li className={styles.sideBarLiStyle}>Category
                            <select onChange={onChange}>
                                <option value="" selected>All</option>
                                {category.categories.map((v) => <option value={v}>{v}</option>)}
                            </select>
                        </li>
                        <li className={styles.sideBarLiStyle}>Price Range</li>
                        <li className={styles.sideBarLiStyle}>Shipping</li>
                    </ul>
                </nav>
            </div>

        </>
    )
}
