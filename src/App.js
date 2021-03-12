import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import AllPages from './components/pages/AllPages'
import Nav from './components/Nav'

const App = ()=> {
  return (
    <div className="ui container">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/locaid/home" component={Dashboard} />
          <Route path="/locaid/all" component={AllPages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
