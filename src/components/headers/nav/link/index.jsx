import React from "react";
import styles from "./style.module.scss";
import { Link as DomLink } from "react-router-dom";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";

const Link = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;
  console.log(href);
  return (
    <div className={styles.link}>
      <motion.div
        className={styles.link}
        onMouseEnter={() => {
          setSelectedIndicator(href);
        }}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          variants={scale}
          animate={isActive ? "open" : "closed"}
          className={styles.indicator}
        ></motion.div>

        <DomLink to={href}>{title}</DomLink>
      </motion.div>
    </div>
  );
};

export default Link;
