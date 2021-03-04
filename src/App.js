
import './App.css';
import Home from './components/home.jsx';
import Port from './components/portfolio'
import Err from './components/error'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/port" component={Port}/>
        <Route component={Err}/>
        </Switch>
      </Router>
      
    </div>  
  );
}

export default App;
