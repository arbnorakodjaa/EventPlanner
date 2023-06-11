import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";


function Restaurants({history}) {

  const [restaurants, setRestaurants] = useState([]);

  const getAllRestaurants = async () => {
    const response = await fetch("http://localhost:8222/api/restaurants");
    const restaurants = await response.json();
    setRestaurants(restaurants);
  }

  const goToDetails = (id) =>{
    history.push("/restaurants/" + id)
  }
  useEffect(() => {
    getAllRestaurants();
  }, []);
  return (
    <div className="menu">
      <h1 className="menuTitle">Restaurantet</h1>
      <div className="menuList">
        {restaurants.map((restaurant) => (
          //<Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} className="menuLink">
          <div onClick={()=>goToDetails(restaurant.id)}>
            <MenuItem
              image={restaurant.image}
              name={restaurant.name}
              price={restaurant.price}
              description={restaurant.name}
            />
          </div>

          //</Link>
        ))}

      </div>
    </div>
  );
}

export default Restaurants;
