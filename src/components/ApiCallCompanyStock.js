import '../styles/projectsComponents.scss';

import capaApiCallCompanyStock from '../assets/images/ApiCallCompanyStock.png';
import github from '../assets/images/icons8-github-50.png';
import heroku from '../assets/images/icons8-heroku-64.png';

export function ApiCallCompanyStock() {
  return (
    <div id="component-projects">
      <div className="img-project">
        <img className="img" src={capaApiCallCompanyStock} alt='CapaApiCallCompanyStock'/>
      </div>
      <div className="about-project">
        <h2>Projeto valor de Ações em tempo real</h2>
        <h3>Aplicação que exibe o valor de ações através de chamadas de API e outras informações relevantes.</h3>
        <h3>
          Projeto desenvolvido com as tecnologias  JavaScript, Nodejs, MySQL, Sequelize, Express, Nodemon, Dontenv, Insomnia, node-postgres, Heroku, ReactJS, Git, GitHub Pages, Axios, Sass.
          
          Regra de negócio:
          Construir uma aplicação que exibe o valor de ações através de chamadas de API.
          Criar uma tela com um input de texto que receberá um símbolo de ação (ex: aapl para Apple, fb para Facebook, twtr para Twitter).
          Retornar o último valor de ação da empresa.
          Retornar outras informações relevantes.
          Salvar todas as consultas e seus dados em um banco de dados (MySQL ou PostgreSQL).
          Evitar requisições repetidas.
          Utilizar quaisquer dependências que desejar e auxiliar no desenvolvimento da aplicação.  

          Sinta a vontade para verificar a publicação em um serviço cloud de hospedagens (Heroku), ou acessar o código no GitHub, clicando no botão abaixo.
        </h3>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CassioRubens-CR/API-call-company-stock-project">
            <img className="imgbutton" src={github} alt='github'/>
            Repositório
          </a>
        </button>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://realtime-stocks-web.herokuapp.com/">
            <img className="imgbutton" src={heroku} alt='heroku'/>
            Deploy
          </a>
        </button>
      </div> 
    </div>
  );
}