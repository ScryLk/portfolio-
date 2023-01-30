import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
  

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educação
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
           Experiência
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Começo na escola</h3>
                <span className="qualification__subtitle">
               Ensino fundamental
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2011 - 2016
                </div>
             
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Ensino médio</h3>
                <span className="qualification__subtitle">
                Poncho Verde
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2020
                  
                </div>
                
                
              </div>
 
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Técnico</h3>
                <span className="qualification__subtitle">
                Eletricista industrial

                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Entrei para a faculdade</h3>
                <span className="qualification__subtitle">
                Técnologo em Sistemas para internet
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Presente
                  
                </div>
                
                
              </div>
              
              
              
              
            </div>
            
            
            
          </div>
          
          

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingressei no exército brasileiro</h3>
           
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - 2022</i> 
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>





              <div>
                <h3 className="qualification__title">Estágio
</h3>
                <span className="qualification__subtitle">
                  Fockink | Gerando Soluções e Integrando Tecnologias
                 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Presente
                  
                </div>
                
              </div>
            </div>

     
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
