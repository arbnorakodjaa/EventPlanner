import { Restaurant } from "@material-ui/icons";
import React, { Fragment,useState , useEffect} from "react";
import "../styles/About.css";

const RestaurantItemsDetails = () =>{
  const [restaurant, setRestaurant] = useState([]);


  const getAllRestaurants = async () => {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    const response = await fetch("http://localhost:8222/api/restaurants/" + id);
    const restaurant = await response.json();
    setRestaurant(restaurant);
  }
  useEffect(() => {
    getAllRestaurants();
  },[]);
  const[toggleTab, setToggleTab]= useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
      <section className ="about">
      <div className="row">
        <div className="column">
        <div className="about-img">
              <img src={restaurant.image} width="600" height="640" />
          </div>
        </div>
        <div className="column">
        <div className="tabs">
          <div className={toggleTab === 1 ? "single-tab active-tab" : "single-tab"}
          onClick = {() => toggleState(1)}
          >
            <h2>Përshkrimi</h2>
          </div>
          <div className={toggleTab === 2 ? "single-tab active-tab" : "single-tab"}
          onClick = {() => toggleState(2)}
          >
            <h2>Reth nesh</h2>
          </div>
      </div>

      <div className="tab-content">
      {/* About Content*/}
      <div className={toggleTab === 1 ? "content active-content" : "content"}>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
      </div>
      <div className={toggleTab === 2 ? "content active-content" : "content"}>
        <div className="exp-column">
          <h3>Kapaciteti</h3>
          <p>{restaurant.capacity} </p>
        </div>
        <div className="exp-column">
          <h3>Cmimi per person</h3>
          <p>{restaurant.price}</p>
        </div>
        <div className="exp-column">
          <h3>Vendi</h3>
          <p>{restaurant.city}</p>
        </div>
      </div>
      </div>
      </div>
      </div>
     </section>
   </Fragment>

  )
}

export default RestaurantItemsDetails;
