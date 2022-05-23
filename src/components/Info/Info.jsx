import React from 'react';
import styles from './Info.module.scss';
import followers from './followers.svg';
import following from './following.svg'

const Info = ({ user }) => {
    return (
        <aside className={styles.info}>
            <img src={user.avatar_url} alt='avatar'/>
            <h2 className={styles.title}>{user.name}</h2>
            <a href={user.html_url} target='_blank'>{user.login}</a>
            <div className={styles.subscribe}>
                <img src={followers} alt='followers'/>
                <p>{`${user.followers} followers`}</p>
                <img src={following} alt='following'/>
                <p>{`${user.following} following`}</p>
            </div>
        </aside>
    );
};

export default Info;