import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Navigation';
import Landing from './pages/Landing';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
