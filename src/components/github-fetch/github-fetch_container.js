import React, { useEffect, useState } from 'react';
import Axios from "axios";

// component ui
import GithubFetchUI from './github-fetch.js';

const GithubFetchContainer = ({ user, setUserData, setRepos, error, setError }) => {
   
    const [username, setUsername] = useState('');
   
    const checkRateLimit = async () => {
        let response = await Axios.get(`https://api.github.com/rate_limit`);
        let data = response.data;
        let reset = new Date(data.rate.reset * 1000);
        // console.log(reset);
        console.log(data.rate);
    }

    const fetchUser = async () => {
        try{
            let userResponse = await Axios.get(`https://api.github.com/users/${username}`)
            setUserData(userResponse.data);
            setError('');
        }catch (err) {
            if(err.response.status === 404){
                setError('User Does Not Exist!');
            }
        }
    } // fetch user list based on search input username

    const fetchRepositories = async (target) => {
        let repositoryResponse = await Axios.get(target);

        setRepos(repositoryResponse.data);
    } // fetch repositories under the user

    const clickHandler = (e) => {
        e.preventDefault();
        fetchUser();
    }

    const getInput = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    useEffect(() => {
        // check the current github api rate limit
        // checkRateLimit()

        if(user.repos_url){
            fetchRepositories(user.repos_url);
        }
    }, [user])
    
   
    return(
        <GithubFetchUI
            clickHandler = {clickHandler}
            getInput = {getInput}
        />
    )
}

export default GithubFetchContainer;