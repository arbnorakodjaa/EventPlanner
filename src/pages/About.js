import React, { Fragment,useState } from "react";
import "../styles/About.css";

const About = () =>{
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
            <h2>Kush jam unë</h2>
          </div>
          <div className={toggleTab === 2 ? "single-tab active-tab" : "single-tab"}
          onClick = {() => toggleState(2)}
          >
            <h2>Avantazhet tona</h2>
          </div>
          <div className={toggleTab === 3 ? "single-tab active-tab" : "single-tab"}
          onClick = {() => toggleState(3)}
          >
            <h2>Kontakti</h2>
          </div>
      </div>

      <div className="tab-content">
      {/* About Content*/}
      <div className={toggleTab === 1 ? "content active-content" : "content"}>
        <h2>Historia Ime</h2>
        <p>I was born in Tetovo and developed a strong interest in events. 
          I studied Computer Science but moved to Berlin for the event industry.
           I found a mentor who taught me business management.
            Now, I lead a team and excel in planning and decision-making. 
            </p>
        <h3>I founded Arbnora Kodja Event Planner to curate exceptional experiences for weddings,</h3>
        <p>
        corporate events, and special occasions. Let us transform your vision into a mesmerizing reality and create unforgettable memories. Trust us to make your event a masterpiece.
        </p>
      </div>
      {/* Skills Content*/}

      
            {/* Experience Content*/}

      <div className={toggleTab === 2 ? "content active-content" : "content"}>
        <div className="exp-column">
          <h3>Save Time</h3>
          <p> Unlock the secret to stress-free event planning. Save valuable time and let us handle the details. Enjoy a seamless and unforgettable event experience. Get started today!</p>
        </div>
        <div className="exp-column">
          <h3>Professional Approach</h3>
          <p>Experience professional event planning at its finest. At EventPlanner, we pride ourselves on delivering meticulous attention to detail and a seamless execution. Sit back, relax, and enjoy a flawlessly executed event tailored to your exact needs.</p>
        </div>
        <div className="exp-column">
          <h3>Team of EventPlanner Experts</h3>
          <p>Unlock the expertise of our seasoned event planning team. With a collective wealth of experience and a passion for creating extraordinary events, From conceptualization to flawless execution, we bring creativity, and industry knowledge to every project. With us by your side, leaving you free to enjoy every moment</p>
        </div>
        <div className="exp-column">
          <h3>Acceptable Prices</h3>
          <p>Experience exceptional event planning without breaking the bank. At EventPlanner, we believe that creating unforgettable events shouldn't come at an exorbitant cost. Let us bring your vision to life within your desired price range, ensuring a remarkable event that exceeds your expectations.</p>
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

export default About;
