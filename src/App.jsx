import React from 'react';
import { BrowserRouter as Router, Link , Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import BriefBar from './components/BriefBar';
import Error404 from './components/Error404';

import Home from './containers/Home'

function App(){
  return(
    <React.Fragment>
      <Router>
        <div>
          <Header />
          <BriefBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component ={Error404}/>
          </Switch>
        </div>
    </Router>
    </React.Fragment>

  );

}





export default App;
