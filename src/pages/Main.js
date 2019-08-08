import React from 'react';

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

import './Main.css'

export default function Main({ match }){
    return(
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            <ul>
                <li>
                    <img src="" alt="" />
                    <footer>
                        <strong>Nome do bixo</strong>
                        <p>Descricao do bixo</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="" alt="" />
                    <footer>
                        <strong>Nome do bixo</strong>
                        <p>Descricao do bixo</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
        
    )
}