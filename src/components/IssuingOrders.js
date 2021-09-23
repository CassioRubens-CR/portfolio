import '../styles/projectsComponents.scss';

import capaIssuingOrders from '../assets/images/CapaIssuingOrders.png';
import github from '../assets/images/icons8-github-50.png';
import heroku from '../assets/images/icons8-heroku-64.png';

export function IssuingOrders() {
  return (
    <div id="component-projects">
      <div className="img-project">
        <img className="img" src={capaIssuingOrders} alt='capaIssuingOrders'/>
      </div>
      <div className="about-project">
        <h2>Projeto Emissao de Pedidos FullStack</h2>
        <h3>
          Projeto desenvolvido com as tecnologias  JavaScript, ReactJS, NodeJS, MySQL, Sequelize, Express, Nodemon, Dontenv, Insomnia, Git, GitHub Pages, Axios, Sass, TypeScript, Bootstrap, Heroku. 

          O usuário desta aplicação poderá ​criar novos pedidos e ​alterar os pedidos existentes.
          Portanto, é indispensável que estas informações sejam armazenadas de forma persistente.

          Um​ ​pedido​ ​é​ ​composto​ ​pelas​ ​seguintes​ ​informações:
          Cliente: O usuário deve escolher uma opção entre os clientes pré-cadastrados no sistema (tabela​ ​1).​
          Itens:​​ ​Cada​ ​item​ ​do​ ​pedido​ ​é​ ​composto​ ​pelas​ ​seguintes​ ​informações:
          Produto: o usuário deve escolher uma opção entre os produtos pré-cadastrados no sistema​ ​(tabela​ ​2).​
          Quantidade:​​ ​a​ ​quantidade​ ​do​ ​produto​ ​deve​ ​ser​ ​um​ ​número​ ​inteiro​ ​maior​ ​que​ ​zero.
          Preço unitário: o sistema deve sugerir o preço unitário do produto, mas deve permitir que o usuário o altere (tanto para mais quanto para menos).
          O preço deve ter no máximo​ ​2​ ​casas​ ​decimais​ ​e​ ​precisa​ ​ser​ ​maior​ ​que​ ​zero.

          Sinta a vontade para verificar a publicação em um serviço cloud de hospedagens (Heroku), ou acessar o código no GitHub, clicando no botão abaixo.
        </h3>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CassioRubens-CR/Project-Issuing-Orders">
            <img className="imgbutton" src={github} alt='github'/>
            Repositório
          </a>
        </button>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://issuing-orders-web.herokuapp.com/">
            <img className="imgbutton" src={heroku} alt='heroku'/>
            Deploy
          </a>
        </button>
      </div> 
    </div>
  );
}