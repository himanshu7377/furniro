import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./component/navbar";
import './global.css'
import Banner from "./component/banner";
import CategoryCard from "./component/categorycard";


import OurProduct from "./component/ourproduct";
import Explore from "./component/explore";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner/>
        <CategoryCard/>
        
        <OurProduct/>
        <Explore/>
      </div>
    </Router>
  );
}

export default App;
