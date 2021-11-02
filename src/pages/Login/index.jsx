import React from 'react';
import logoOrkut from '../../assets/orkut_logo.png';
import { FormLogin } from '../../components/FormLogin';
import { PanelBody } from '../../components/PanelBody';
import './styles.css'

export const Login = (props) => {
    return (

    
        <div class="container">
            <header>

                <div className="logo">
                    <img src={logoOrkut} />
                </div>

                <div className="textos" >
                    <p> <span className="span"  >Conecte-se </span> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                    <p>  <span className="span" >Conheça </span> novas pessoas através de amigos de seus amigos e comunidade </p>
                    <p>  <span className="span" > Compartilhe </span> seus vídeos, fotos e paixôes em um só lugar </p>
                </div>
            </header>
            <main>
                <FormLogin />
            </main>
            <aside>
                <PanelBody />
            </aside>
        </div>


    )
}