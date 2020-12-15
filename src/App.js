import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header';
import Navbar from './components/Navbar';
import RandomActivity from './components/RandomActivity';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />

        <Route exact path="/" render={(props) => (
          <div>Home page</div>
        )}>
        </Route>

        <Route path="/random" component={RandomActivity}></Route>

      </Router>
    </div>
  );
}

export default App;
