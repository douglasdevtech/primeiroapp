import React from "react";
import './styles.css';
import Logo from '../../assets/raio flash_resized.jpg'
import { Link, useNavigate } from 'react-router-dom';

function Footer(){
    return (
        <>
            <footer>
                <img id='logo' src={Logo} />
                <span>todos os direitos reservados ©</span>
                <span>desenvolvido por: Douglas Santos</span>

                <nav class="footer-navigation">
                    <ul class="footer-list">
                        <Link style={{textDecoration: 'none' }} to={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link style={{textDecoration: 'none' }} to={'/contatos'}>
                            <li>Contatos</li>
                        </Link>
                        <Link style={{textDecoration: 'none' }} to={'/fotos'}>
                        <li>Fotos</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={'/comentário'}>
                        <li>Comentários</li>
                        </Link>
                    </ul>
                </nav>
            </footer>        
        </>
        
    )
}

export default Footer