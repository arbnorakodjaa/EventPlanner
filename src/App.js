import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Restaurants";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MenuItemDetails from "./pages/RestaurantItemsDetails";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantItemsDetails from "./pages/RestaurantItemsDetails";
import Restaurants from "./pages/Restaurants";
import Singers from "./pages/Singers";
import SingerItemsDetails from "./pages/SingerItemsDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurants" exact component={Restaurants} />
          <Route path="/singers" exact component={Singers} />
          <Route path="/singers/:id" exact component={SingerItemsDetails} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/restaurants/:id" component={RestaurantItemsDetails} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
