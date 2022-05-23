import React, {useState} from 'react';
import { Octokit } from '@octokit/core';
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import './App.scss'
import Main from '../Main/Main'
import FirstPage from "../FirstPage/FirstPage";
import search from './search.svg'

const octokit = new Octokit();

const App = () => {
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const notUser = false;

    const fetchUser = async (username) => {
        try {
            setIsPending(true);

            const response = await octokit.request('GET /users/{username}', {
                username
            })

            setUser(response.data)
        } catch(e) {
            setUser(null);
        } finally {
            setIsPending(false);
        }

    }
    return (
        <div className="app">
            <Header fetchUser={fetchUser}/>
            {isPending && <Loader />}
            {user ? <Main user={user} /> : <FirstPage text={'Start with searching a GitHub user'} img={search}/>}
        </div>
    );
};

export default App;