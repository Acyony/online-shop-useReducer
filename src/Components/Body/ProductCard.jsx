import React from 'react';
// import styles from './ProductCard.module.css';
import styles from "./ProductCard.module.css";

export default function ProductCard(props) {


    return (
        <div className={styles.product_card}>
            <img className={styles.img_style} src={props.src} alt=""/>
            <span>{props.name}</span>
            <span>{props.price}</span>
            <button>Add to Cart</button>

        </div>
    )
}
