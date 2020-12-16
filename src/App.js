import "./App.css";
import "./Snowflake.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RandomActivity from "./components/RandomActivity";
import SearchByCost from "./components/SearchByCost";
import SearchByParticipants from "./components/SearchByParticipants";
import { SlideValueContextProvider } from "./contextComponents/SlideValueContext";
import SnowFlakes from "./components/SnowFlakes";
import ActivityType from './components/ActivityType';
import { FavoriteProvider } from './contexts/FavoriteContext';
import Favorites from './components/Favorites';


function App() {
  return (
    <Router>
      <FavoriteProvider>
      <div className="App">
        <SnowFlakes />
        <Header />
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route path="/random" component={RandomActivity}></Route>
          <Route path="/favorites" component={Favorites}></Route>
          <Route path="/type" component={ActivityType}></Route>
          <SlideValueContextProvider>
            <Route path="/cost" component={SearchByCost}></Route>
          </SlideValueContextProvider>
          <Route path="/participants" component={SearchByParticipants}></Route>
        </div>
      </div>
      </FavoriteProvider>
    </Router>
  );
}

export default App;
