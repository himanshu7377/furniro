import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./component/navbar";
import './global.css'
import Banner from "./component/banner";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner/>
      </div>
    </Router>
  );
}

export default App;
