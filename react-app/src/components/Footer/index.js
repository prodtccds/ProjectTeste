import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import instaIcon from "./imgs/insta.png";
import gitIcon from "./imgs/git.png";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         Assine Nossa Newsletter!
        </p>
        <p className='footer-subscription-text'>
          Preencha com seu E-mail e enviaremos o acesso!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu e-mail' />

          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre </h2>
            <Link to='/sign-up'>Projeto</Link>
            <Link to='/'>Equipe</Link>
            <Link to='/'>Material Referencial</Link>
            <Link to='/'>Indicação de conteúdo</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contato</h2>
            <Link to='/'>Membros do Projeto</Link>
            <Link to='/'>Desenvolvedores</Link>
  
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Descrição</h2>
            <Link to='/'>Projeto</Link>
            <Link to='/'>Kali Linux</Link>
            <Link to='/'>Ubuntu</Link>
            <Link to='/'>Windows Server</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
        
            <Link to='www.github.com/prodtccds' > GitHub</Link>
            <Link to='https://www.instagram.com/projetojeronimo/'>Instagram </Link>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              JERÔNIMO
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>JERÔNIMO © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;

