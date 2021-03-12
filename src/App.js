import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import AllPages from './components/pages/AllPages'
import Nav from './components/Nav'
import SinglePage from './components/pages/SinglePage';

const App = ()=> {
  return (
    <div className="ui container">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/locaid/" component={Dashboard} />
          <Route path="/locaid/all" component={AllPages} />
          <Route exact path="/page/:name" component={ SinglePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
