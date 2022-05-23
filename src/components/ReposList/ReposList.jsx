import React from 'react';
import styles from './ReposList.module.scss'
const ReposList = ({ repos }) => {
    return (
        <ul className={styles.list}>
            {repos.map((repo) => (
                <li key={repo.id} className={styles.repo}>
                    <a href={repo.html_url} target="_blank">
                        {repo.name}
                    </a>
                    <p>{repo.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default ReposList;