import React from 'react';
import logo from './Logo.svg';
import styles from './Header.module.scss'
import SearcInput from "../SearchInput/SearcInput";

const Header = ({ fetchUser }) => {
    return (
       <header>
           <img className={styles.logo} src={logo} alt='logo'></img>
           <SearcInput fetchUser={ fetchUser }/>
       </header>
    );
};

export default Header;