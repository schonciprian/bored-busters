import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Participants from './components/Participants';
import RandomActivity from './components/RandomActivity';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />

        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route path="/random" component={RandomActivity}></Route>
          <Route path="/participants" component={Participants}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
