import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Nav from './components/Navigation';
import Landing from './pages/Landing';
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
