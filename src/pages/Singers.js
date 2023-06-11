import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Singers({history}) {
    const [singers, setSingers] = useState([]);

    const getAllSingers = async () => {
        const response = await fetch("http://localhost:8070/api/singers");
        const singers = await response.json();
        setSingers(singers);
    }
    const goToDetails = (id) =>{
        history.push("/singers/" + id)
      }
    useEffect(() => {
        getAllSingers();
    }, []);
    return (
        <div className="menu">
            <h1 className="menuTitle">Kengetaret</h1>
            <div className="menuList">
                {singers.map((singer) => (
                  <div onClick={()=>goToDetails(singer.id)}>
                  <MenuItem
                    image={singer.image}
                    name={`${singer.firstName} ${singer.lastName}`}
                    price={singer.price}
                  />
                </div>
                ))}

            </div>
        </div>
    );
}

export default Singers;
