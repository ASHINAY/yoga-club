import React from "react";
import './HomePage.css';
import YogaExercise1 from "../assets/images/YogaExercise1.png";
import YogaExercise2 from "../assets/images/YogaExercise2.png";
import YogaExercise3 from "../assets/images/YogaExercise3.png";

function HomePage() {
    
    const clubFormUrl = "https://forms.gle/287xXW396aeqJvsW7";

    const onClickRegisterBtn = () =>{
        window.open(clubFormUrl, "_blank");
    
    }
  return (
    <div className="home-page-container">
      <div className="left-container">
        <span>✦ Yoga club</span>
        <span>Improve your mind-muscle</span>
        <span>
          Experience the union of body and mind with our yoga sessions. Guided
          by skilled instructors, find balance, flexibility, and inner harmony.
          Suitable for all levels. Embrace a transformative journey with us.
        </span>
        <button className="register-button" onClick={onClickRegisterBtn}>
          Register a class
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap:"10px"
        }}
      >
        <img style={{ height: "180px", width: "180px" }} src={YogaExercise1} />
        <img style={{ height: "180px", width: "180px" }} src={YogaExercise2} />
        <img style={{ height: "180px", width: "180px" }} src={YogaExercise3} />
      </div>
    </div>
  );
}

export default HomePage;
