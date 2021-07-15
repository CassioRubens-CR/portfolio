import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Hackathon } from './pages/Hackathon';
import { Certificates } from './pages/Certificates';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portfolio" exact component={Home} />
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/portfolio/about" component={About} />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/hackathon" component={Hackathon} />
        <Route path="/portfolio/certificates" component={Certificates} />
        <Route path="/portfolio/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
