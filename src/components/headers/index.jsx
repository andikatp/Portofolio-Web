import React, { useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import NavHeader from "./nav";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div onClick={handleToggleBurger} className={styles.button}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        />
      </div>
      <AnimatePresence mode="wait">{isActive && <NavHeader />}</AnimatePresence>
    </>
  );
};

export default Header;
