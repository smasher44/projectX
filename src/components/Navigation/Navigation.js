import React from 'react';
import './Navigation.css';
import Particles from "react-tsparticles";

const particlesOptions = {
    fpsLimit: 120,
    particles: {
      color: {
        value: "#0ccac4",
      },
      links: {
        color: "#0ccac4",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 1800,
        },
        value: 90,
      },
      opacity: {
        value: 0.9,
      },
      size: {
        random: true,
        value: 3,
      },
    },
    
  }
  
export const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn){
        return(
            <nav className="Navigation">
            <Particles id="tsparticles" options={particlesOptions} />
            <p onClick={() => onRouteChange('signout')} 
               className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return(
            <nav className="Navigation">
            <Particles id="tsparticles" options={particlesOptions} />
            <p onClick={() => onRouteChange('signin')} 
               className = 'f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} 
               className = 'f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );  
    }
}

