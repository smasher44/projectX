import React from 'react';
import './Navigation.css';

export const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn){
        return(
            <nav className="Navigation">
            <p onClick={() => onRouteChange('signout')} 
               className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return(
            <nav className="Navigation">
            <p onClick={() => onRouteChange('signin')} 
               className = 'f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} 
               className = 'f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );  
    }
}

/*
const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn){
        return(
            <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} 
               className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return(
            <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} 
               className = 'f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} 
               className = 'f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}
 */