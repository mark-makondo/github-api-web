import React from 'react';

// compoenents
import GithubFetch from '../../components/github-fetch/github-fetch_container.js';

const Home = ({ user, setUserData, repos, setRepos, error, setError, fetchRepoReadme, showClickHandler }) => {
   
    return(
        <div className="home">
            <header className="normal-1">github fetch</header>
            <GithubFetch
              user = {user}
              setUserData = {setUserData}
              setRepos = {setRepos}
              setError = {setError}
              error = {error}
            />

            <div className="home-content">
                <div key={user.id} className="home-content__profile">
                    <img src={user.avatar_url} alt=""/>
                    <span className="normal-2">{user.name}</span>
                </div>
                <button className="normal-2" onClick={(e) =>showClickHandler(e)}>Repositories</button>
                { error ? (<span className="normal-1 error">{error}</span>) 
                : (<div className="home-content__repos">
                    {repos ? repos.map( (item, i) => (
                        <div key={item.id} onClick={(e)=> fetchRepoReadme(e,item.owner.login, item.name)} className={`home-content__repos-holder repo-${i}`}>
                            <span className="normal-1">{item.name}</span>
                            <div className="repo-info">
                                <a href={item.html_url} className="normal-2">Repo Link</a>
                                <p className={`normal-2 p-${i}`}></p>
                            </div>
                            
                        </div>)) 
                : (<span className="normal-1"> Loading . . .</span>)}</div>
                )}
            </div>
        </div>
    )
}

export default Home;