import React, { useState } from "react";
import styles from "./style.module.scss";

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
    </>
  );
};

export default Header;
