import React from "react";
import { MenuList } from "../helpers/MenuList";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Restaurantet</h1>
      <div className="menuList">
      {MenuList.map((menuItem, key) => (
  <Link to={`/menu/${key}`} key={key} className="menuLink">
    <MenuItem
      image={menuItem.image}
      name={menuItem.name}
      price={menuItem.price}
      description={menuItem.description}
    />
  </Link>
))}

      </div>
    </div>
  );
}

export default Menu;
