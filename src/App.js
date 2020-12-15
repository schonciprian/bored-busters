import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" render={(props) => (
          <div>Home page</div>
        )}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
