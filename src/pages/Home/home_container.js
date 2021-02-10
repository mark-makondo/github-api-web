import React, { useEffect, useState } from 'react';
import Axios from "axios";

// components ui
import HomeUI from './home.js';

const HomeContainer = () => {
    const [user, setUserData] = useState({});
    const [repos, setRepos] = useState([]); 
    const [error, setError]= useState('');

    const fetchRepoReadme = async (e,targetOwner, targetRepName) => {
        e.currentTarget.classList.toggle('active');

        let readmeResponse = await Axios.get(`https://api.github.com/repos/${targetOwner}/${targetRepName}/contents/README.md`);
        let readmeData = readmeResponse.data;
        let str = readmeData.content;
        let buff = new Buffer.from(str, 'base64')
        let base64ToString = buff.toString('ascii');
        
        let childP = e.target.parentNode.querySelector('.repo-info p');

        childP.innerHTML = `Read Me: ${base64ToString}`;
        
    } //set repo readme callback to use it on home container ui
    
    const showClickHandler = (e) => {
        e.preventDefault();
        
        let query = document.querySelector('.home-content__repos');
        query.classList.toggle('active');
    }

    return(
        <HomeUI
            user = {user}
            setUserData = {setUserData}
            repos = {repos}
            setRepos = {setRepos}
            error = {error}
            setError = {setError}
            fetchRepoReadme = {fetchRepoReadme}
            showClickHandler = {showClickHandler}
        />
    )
}

export default HomeContainer;