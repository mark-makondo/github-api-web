import React from 'react';

const githubFetch = ({ clickHandler, getInput }) => {
    
    return(
        <div className="github-fetch">
            <form className="input-form">
                <input autoComplete="off" onChange={ (e) => getInput(e) } className="form__home normal-2" placeholder="Search Username" type="text" id="username" name="username" required/>
                <input className="form__submit normal-2" onClick={ (e) => clickHandler(e) } type="button" value="Search"/> 
            </form>
        </div>
    )
}

export default githubFetch;