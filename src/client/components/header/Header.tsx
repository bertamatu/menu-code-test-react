import React from 'react';
import styles from "./Header.module.scss";
import { MdFoodBank } from 'react-icons/md';

const Header = () => {
  return <header className={styles.headerContainer}>
      <MdFoodBank className={styles.headerLogo} />
      MENU
      </header>;
};

export default Header;
