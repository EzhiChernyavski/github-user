import React from 'react';
import styles from './FirstPage.module.scss';
import search from '../App/search.svg'

const FirstPage = ({text, img}) => {
    return (
        <section className={styles.firstpage}>
            <img src={img} alt='search'/>
            <p>{text}</p>
        </section>
    );
};

export default FirstPage;