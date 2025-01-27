import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-medal about__icon"></i>

        <h3 className="about__title">Idade</h3>
        <span className="about__subtitle">22 Anos</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">A procura</span>
      </div>

      <div className="about__box">
        <i class="bx bx-map about__icon"></i>

        <h3 className="about__title">Nacionalidade</h3>
        <span className="about__subtitle">Brasil</span>
      </div>
      
    </div>
    
  );
};

export default Info;
