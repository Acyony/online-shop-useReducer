import React from "react";
import SideBar from "./SideBar.jsx";
import CardsContainer from "./CardsContainer.jsx";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <SideBar/>
        <CardsContainer/>
      </div>
    </>
  );
}
