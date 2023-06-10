import React, { Fragment,useState } from "react";
import "../styles/About.css";

const MenuItemDetails = () =>{
  const[toggleTab, setToggleTab]= useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
      <section className ="about">
      <div className="row">
        <div className="column">
          <div className="about-img"></div>
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
          <div className={toggleTab === 3 ? "single-tab active-tab" : "single-tab"}
          onClick = {() => toggleState(3)}
          >
            <h2>Adresa</h2>
          </div>
      </div>

      <div className="tab-content">
      {/* About Content*/}
      <div className={toggleTab === 1 ? "content active-content" : "content"}>
        <h2>Restaurant Arra</h2>
        <p>Restorant "Arra", vendi ku vite me radhë njerëzit kanë zgjedhur t'i festojnë gëzimet e tyre familjare.
             Me një staf me përvojë, kuzhina moderne dhe tradicionale, si dhe salla bashkëkohore,
            </p>
        <h3>Restorant "Arra" vjen në EventPlanner</h3>
        <p>për t'ua dhënë mundësinë të gjithë shqiptarëve kudo që ndodhen,
               të rezervojnë online restorantin tonë për të kaluar një eksperiencë të paharrueshme. Ju mirëpresim 
        </p>
      </div>
      {/* Skills Content*/}

      
            {/* Experience Content*/}

      <div className={toggleTab === 2 ? "content active-content" : "content"}>
        <div className="exp-column">
          <h3>Save Time</h3>
          <p> Unlock the secret to stress-free event planning. Save valuable time and let us handle the details. From venue selection to decorations, catering to entertainment, our expert team will turn your vision into reality. Enjoy a seamless and unforgettable event experience. Get started today!</p>
        </div>
        <div className="exp-column">
          <h3>Professional Approach</h3>
          <p>Experience professional event planning at its finest. At EventPlanner, we pride ourselves on delivering meticulous attention to detail and a seamless execution. Our team of dedicated professionals is committed to bringing your vision to life, leaving no room for compromises. From concept to completion, trust us to handle every aspect of your event with the utmost professionalism. Sit back, relax, and enjoy a flawlessly executed event tailored to your exact needs.</p>
        </div>
        <div className="exp-column">
          <h3>Team of EventPlanner Experts</h3>
          <p>Unlock the expertise of our seasoned event planning team. With a collective wealth of experience and a passion for creating extraordinary events, our team of experts is ready to turn your vision into a reality. From conceptualization to flawless execution, we bring creativity, meticulous planning, and industry knowledge to every project. With us by your side, you can trust that your event will be meticulously crafted and seamlessly executed, leaving you free to enjoy every moment</p>
        </div>
        <div className="exp-column">
          <h3>Acceptable Prices</h3>
          <p>Experience exceptional event planning without breaking the bank. At EventPlanner, we believe that creating unforgettable events shouldn't come at an exorbitant cost. Our commitment to providing acceptable prices means that you can enjoy professional event planning services without compromising on quality. We work closely with you to understand your budgetary requirements and tailor our services to offer the best value for your investment. Let us bring your vision to life within your desired price range, ensuring a remarkable event that exceeds your expectations.</p>
        </div>
      </div>
      </div>
<div className={toggleTab === 3 ? "content active-content" : "content"}>
        <h2>Visit us</h2>
       
<div className="exp-column">
          <h3>Location</h3>
          <p>Wilmesdorf Str 34, 
            10030 Berlin
            Germany</p>
        </div>
        <div className="exp-column">
          <h3>Phone no.</h3>
          <p>0031 3333 32 32</p>
        </div>
        <div className="exp-column">
          <h3>E-Mail</h3>
          <p>arbnorakodja@eventplanner.eu</p>
        </div>




      </div>
      </div>

      </div>

     </section>
   </Fragment>

  )
}

export default MenuItemDetails;
