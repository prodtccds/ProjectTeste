import React from 'react';
import "./styles/home.css"
import "../App.css";
import Cards from './components/Cards'
import Esc from './assets/escrevendodois.mp4'


export default function Home() {
        return (

                <div className='hero-container' >

                        <div className='background__area'>
                                <video src={Esc} autoPlay loop muted />
                                <h1 >SEJA UM HACKER</h1>
                                <h3>Fique por dentro dos principais conceitos de segururança e web hacking!</h3>
                                <br></br>
                                <div className='hero-btns'>
                                        <button className='buttonStarted' >
                                                <a href="/sobre">   INICIAR  </a>
                                        </button>
                                        <button className='buttonAbout'>
                                                <a href="/sobre">   SOBRE O PROJETO  </a>
                                        </button>
                                </div>
                        </div>

                        <div className='card__wrapper'>
                                <Cards />
                        </div>

                </div>
        );
}



