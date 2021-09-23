import { Header } from '../components/Header.js';
import { WebMotors } from '../components/WebMotors.js';
import { ApiCallCompanyStock } from '../components/ApiCallCompanyStock.js';
import { ProjectNlw } from '../components/ProjectNlw.js';
import { ChallengeNodeJS } from '../components/ChallengeNodeJS.js';
import { Trybe } from '../components/Trybe.js';

import '../styles/projects.scss';

export function Projects() {
  return (
    <div>
      <Header />
      <div id="page-projects">
        <WebMotors />
        <ApiCallCompanyStock/>
        <ProjectNlw />
        <ChallengeNodeJS />
        <Trybe />
      </div>
    </div>
  )
}
