import '../styles/projectsComponents.scss';

import CapaWebMotors from '../assets/images/CapaWebMotors.png';
import github from '../assets/images/icons8-github-50.png';
import heroku from '../assets/images/icons8-heroku-64.png';

export function WebMotors() {
  return (
    <div id="component-projects">
      <div className="img-project">
        <img className="img" src={CapaWebMotors} alt='CapaWebMotors'/>
      </div>
      <div className="about-project">
        <h2>Projeto WebMotors</h2>
        <h3>Aplicação Web Para Compra e Venda de Veículos Automotores</h3>
        <h3>
          Projeto desenvolvido com as tecnologias  JavaScript, ReactJS, Axios, Git, GitHub, Sass, React Icons, Swagger, Heroku.
          
          O usuário desta aplicação poderá pesquisar veículos novos e usados.
          
          As informações são consumidas via Webservice através da aplicação open source Swagger.
          Cosumir da Webservice Marcas;
          Cosumir da Webservice Modelos;
          Cosumir da Webservice Versões;
          Cosumir da Webservice Veículos;
          
          Ao realizar pesquisar sera renderizado o(os) veículo(os) de acordo com a(as) opção(ões) selecionada(as);
          
          Sinta a vontade para verificar a publicação em um serviço cloud de hospedagens (Heroku), ou acessar o código no GitHub, clicando no botão abaixo.
        </h3>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CassioRubens-CR/project-web-motors">
            <img className="imgbutton" src={github} alt='github'/>
            Repositório
          </a>
        </button>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://project-web-motors.herokuapp.com/">
            <img className="imgbutton" src={heroku} alt='heroku'/>
            Deploy
          </a>
        </button>
      </div> 
    </div>
  );
}