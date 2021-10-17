import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import styled from "styled-components";
import Logo from "./Logo.png";

const ImgWrap = styled.div`
  text-align: center;
`;
const LogoImg = styled.img`
  width: 15vw;
  text-align: center;
`;

// const Ul = styled.ul`
// display: flex;
// justify-content: center;
// list-style: none;
// `

// const Li = styled.li`
// margin: 1rem;
// `

export default function Header() {
  return (
    <>
      <ImgWrap>
        <LogoImg src={Logo}></LogoImg>
      </ImgWrap>
      <nav>
        <ul className={styles.flex_bar}>
          <li>
            <Link className={styles.link}>Latest Products</Link>
          </li>
          <li>
            <Link className={styles.link}>Brands</Link>
          </li>
          <li>
            <Link className={styles.link}>Shop</Link>
          </li>
          <li>
            <Link className={styles.link}>Designers</Link>
          </li>
          <span>
            <i class="fas fa-shopping-cart"></i>
          </span>
        </ul>
      </nav>
    </>
  );
}
