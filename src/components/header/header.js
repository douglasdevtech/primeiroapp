import React from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/raio flash_resized.jpg'
 
function Header (){
    return (
    
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none' }} to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none' }} to={'/contato'}>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none' }} to={'/elenco'}>
                        <li>Elenco</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/comentario'}>
                        <li>Comentarios</li>
                    </Link>
                </ul>
            </nav>
        </header>    
    )
}

export default Header;