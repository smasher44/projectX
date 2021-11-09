import React from 'react';
import './Navigation.css';
import Particles from "react-tsparticles";

const particlesOptions = {
    fpsLimit: 90,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          // mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 5,
          opacity: 0.8,
          size: 70,
        },
        push: {
          quantity: 3,
        },
        
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
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
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
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

