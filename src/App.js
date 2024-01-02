import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./component/navbar";
import './global.css'
import Banner from "./component/banner";
import CategoryCard from "./component/categorycard";

import ItemCart from "./component/itemcart";
import OurProduct from "./component/ourproduct";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner/>
        <CategoryCard/>
        {/* <ItemCart/> */}
        <OurProduct/>
      </div>
    </Router>
  );
}

export default App;
