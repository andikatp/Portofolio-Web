import React, { useState } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Link from "./link";

const NavHeader = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const navigate = useNavigate();

  const [selectedIndicator, setSelectedIndicator] = useState(navigate);

  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
            {navItems.map((item, index) => {
              return <Link data={{ ...item, index }} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
