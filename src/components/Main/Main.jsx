import React from 'react';
import Info from '../Info/Info';
import styles from './Main.module.scss'
import Repos from "../Repos/Repos";
import FirstPage from "../FirstPage/FirstPage";
import union from './Union.svg'

const Main = ({ user }) => {
    return (
        <main className={styles.main}>
            <Info user={user}/>
            {user.public_repos === 0 ? <FirstPage text={'Repository list is empty'} img={union} /> : <Repos user={user}/>}
        </main>
    );
};

export default Main;