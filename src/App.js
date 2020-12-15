import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RandomActivity from './components/RandomActivity';
import { FavoriteProvider } from './contexts/FavoriteContext';
import Favorites from './components/Favorites';


function App() {
  return (
    <Router>
      <FavoriteProvider>
      <div className="App">
        <Header />
        <Navbar />

        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route path="/random" component={RandomActivity}></Route>
          <Route path="/favorites" component={Favorites}></Route>

        </div>
      </div>
      </FavoriteProvider>
    </Router>
  );
}

export default App;
