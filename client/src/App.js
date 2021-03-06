import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Navigation';
import Landing from './pages/Landing';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import TradeOverview from './components/TradeOverview';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/trade/id=:tradeId" component={TradeOverview} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
