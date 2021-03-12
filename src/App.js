import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import AllPages from './components/pages/AllPages'
import Nav from './components/Nav'
import SinglePage from './components/pages/SinglePage';
import DB from './data.json'

const App = () => {
  	const [data, getData] = useState([]);

	useEffect(() => {
		getData(DB);
	}, []);

  return (
    <div className="ui container">
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/locaid/" component={Dashboard} />
          <Route path="/locaid/all" render={()=> <AllPages data={data}/> }/>
          <Route exact path="/page/:slug" render={(props) => <SinglePage {...props} data={data}/> }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
