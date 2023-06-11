import React, { Fragment,useState, useEffect } from "react";
import "../styles/SingerItemsDetails.css";


const SingerItemsDetails = () =>{
    const [singer, setSinger] = useState([]);


    const getAllSingers = async () => {
      var url = window.location.pathname;
      var id = url.substring(url.lastIndexOf('/') + 1);
      const response = await fetch("http://localhost:8070/api/singers/" + id);
      const singer = await response.json();
      setSinger(singer);
    }

    
    useEffect(() => {
      getAllSingers();
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
              <img src={singer.image} />
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
      <div className={toggleTab === 1 ? "content active-content" : "content"}>
        <h2>{singer.firstName +" "+ singer.lastName}</h2>
        <p>{singer.description}</p>

      </div>
      <div className={toggleTab === 2 ? "content active-content" : "content"}>
        <div className="exp-column">
          <h3>Nacionaliteti</h3>
          <p>{singer.nationality}</p>
        </div>
        <div className="exp-column">
          <h3>Cmimi</h3>
          <p>{singer.price}</p>
        </div>
      </div>
      </div>
      </div>
      </div>
     </section>
   </Fragment>

  )
}

export default SingerItemsDetails;
