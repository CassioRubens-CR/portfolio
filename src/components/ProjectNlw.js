import capaLetmeAsk from '../assets/images/CapaLetmeAsk.jpg';

import '../styles/projectsComponents.scss';

import github from '../assets/images/icons8-github-50.png';
import firebase from '../assets/images/icons8-firebase-48.png';

export function ProjectNlw() {
  return (
    <div id="component-projects">
      <div className="img-project">
        <img className="img" src={capaLetmeAsk} alt='capaLetmeAsk'/>
      </div>
      <div className="about-project">
        <h2>Projeto LetmeAsk</h2>
        <h3>Projeto desenvolvido com as tecnologias  REACT, FIREBASE e TYPESCRIPT.
          Como o próprio nome diz “deixe-me perguntar” é uma aplicação que cria interação direta entre idealizadores e participantes do evento. Isso acontece de forma dinâmica e segura com autentificação obrigatória, através do login rápido que utiliza a conta GMAIL do próprio(a) usuário(a), tanto para criar uma sala ou fazer perguntas.

          A aplicação conta ainda com um botão LIGTH / DARK que trás maior conforto para os(as) usuários(as) com um simples clique.
          
          Veja aplicação rodando ao clicar no botão deploy.
        </h3>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CassioRubens-CR/Project_Letmeask_NLW_Together_Rocketseat">
            <img className="imgbutton" src={github} alt='github'/>
            Repositório
          </a>
        </button>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://letmeask-1ee7c.web.app/">
            <img className="imgbutton" src={firebase} alt='github'/>
            Deploy
          </a>
        </button>
      </div> 
    </div>
  );
}