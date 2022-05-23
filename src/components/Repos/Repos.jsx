import React, {useEffect, useState} from 'react';
import {Octokit} from '@octokit/core';
import styles from './Repos.module.scss'
import Loader from "../Loader/Loader";
import ReposList from "../ReposList/ReposList";
import Pagination from "../Pagination/Pagination";

const octokit = new Octokit();

const Repos = ({user}) => {
    const REPOS_PER_PEGE = 4;
    const totalItems = user.public_repos;
    const [page, setPage] = useState(1);
    const [repos, setRepos] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const endIndex = Math.min(page * REPOS_PER_PEGE, totalItems);
    const startIndex = (page - 1) * REPOS_PER_PEGE;
    const pageCount = Math.ceil(totalItems / REPOS_PER_PEGE);


    const fetchRepos = async () => {
        try {
            setIsPending(true);

            const response = await octokit.request('GET /users/{username}/repos', {
                username: user.login,
                page: page,
                per_page: REPOS_PER_PEGE,
                sort: 'updated',
            });

            setRepos(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsPending(false);
        }
    };

    useEffect(() => {
            fetchRepos();
        }, [user, page]
    )

    return (
        <section className={styles.repos}>
            <h2>{`Repositories (${user.public_repos})`}</h2>
            {isPending && <Loader/>}
            {repos.length ? <ReposList repos={repos}/> : 'Repositories not found'}
            <Pagination
                perPage={REPOS_PER_PEGE}
                setPage={setPage}
                page={page}
                totalItems={user.public_repos}
                endIndex = {endIndex}
                startIndex = {startIndex}
                pageCount = {pageCount}
                setPage={setPage}
                page={page}
                totalItems={user.public_repos}
            />
        </section>
    );
};

export default Repos;