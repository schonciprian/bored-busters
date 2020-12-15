import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RandomActivity from "./components/RandomActivity";
import SearchByCost from "./components/SearchByCost";
import { SlideValueContextProvider } from "./contextComponents/SlideValueContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />

        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route path="/random" component={RandomActivity}></Route>
          <SlideValueContextProvider>
            <Route path="/cost" component={SearchByCost}></Route>
          </SlideValueContextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
