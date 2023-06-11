import React from "react";

function MenuItem({ image, name, price,description, link}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <p> {description} </p>
      <p className="link"> {link} </p>
    </div>
  );
}

export default MenuItem;
