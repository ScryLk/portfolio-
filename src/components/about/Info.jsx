import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-medal about__icon"></i>

        <h3 className="about__title">Age</h3>
        <span className="about__subtitle">20 Years</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Seeking experience</span>
      </div>

      <div className="about__box">
        <i class="bx bx-map about__icon"></i>

        <h3 className="about__title">Nationality</h3>
        <span className="about__subtitle">Brazil</span>
      </div>
      
    </div>
    
  );
};

export default Info;
