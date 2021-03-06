import React, { useEffect, useState } from 'react';
import Axios from "axios";

// components ui
import HomeUI from './home.js';

// animation
import Animation from './home_animation.js';

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
        
    } // fetch repositories readme file data on repo click 
    
    const showClickHandler = (e) => {
        e.preventDefault();
        let active = false;

        if(objectIsEmpty(user)){
            alert("Search first!");
        }else{
            let button = document.querySelector('.home-content button');
            let query = document.querySelector('.home-content__repos');
            query.classList.toggle('active');

            if(query.classList.contains('active')){
                button.innerHTML = "Hide Repositories";
                active = true;
            }else{
                button.innerHTML = "Repositories";
                active = false;
            }
            Animation(e, active);
        }
    } //show repo button click handler event

    const objectIsEmpty = (object) => {
        for (let key in object){
            if(object.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    } // custom function for determining empty object
    
    useEffect(() => {

    }, [])

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