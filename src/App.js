import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./component/navbar";
import './global.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
