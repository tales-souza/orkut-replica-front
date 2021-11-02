import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';

export const PanelBody = (props) => {
    return (


        <div class="panel-body">
            <p class="text-center auth-subtitle">Ainda não é membro?</p>
            <p class="text-center"><Link to="/register"><b>CADASTRE-SE</b></Link></p>
        </div>


    )
}