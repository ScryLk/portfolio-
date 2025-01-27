import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projetos</h2>
      <p className="section__subtitle">Aqui estão alguns dos meus principais projetos</p>

      <div className="projects__container container grid">
        <div className="projects__content">
          <div>
            <i className="uil uil-globe projects__icon"></i>
            <h3 className="projects__title">Dashboard Interativo</h3>
          </div>

          <span onClick={() => toggleTab(1)} className="projects__button">
            Ver mais
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>

              <h3 className="projects__modal-title">Dashboard Interativo</h3>
              <p className="projects__modal-description">
                Um dashboard criado utilizando Plotly e Streamlit para visualização de dados em tempo real.
              </p>
              <ul className="projects__modal-services grid">
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Visualizações interativas com filtros customizados.
                  </p>
                </li>
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Backend conectado a APIs para dados em tempo real.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="projects__content">
          <div>
            <i className="uil uil-mobile-android projects__icon"></i>
            <h3 className="projects__title">Aplicativo <br/> Mobile</h3>
          </div>

          <span onClick={() => toggleTab(2)} className="projects__button">
            Ver mais
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>

              <h3 className="projects__modal-title">Aplicativo Mobile</h3>
              <p className="projects__modal-description">
                Um aplicativo mobile desenvolvido com React Native e NativeWind, focado em usabilidade e performance.
              </p>
              <ul className="projects__modal-services grid">
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Design responsivo e estilização eficiente com NativeWind.
                  </p>
                </li>
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Funcionalidades completas, incluindo autenticação e integração de APIs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-database projects__icon"></i>
            <h3 className="projects__title">Análise de <br />Dados</h3>
          </div>

          <span onClick={() => toggleTab(3)} className="projects__button">
            Ver mais
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>

              <h3 className="projects__modal-title">Análise de Dados</h3>
              <p className="projects__modal-description">
                Um projeto de análise de dados utilizando Python, Pandas e Matplotlib para insights avançados.
              </p>
              <ul className="projects__modal-services grid">
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Relatórios detalhados gerados automaticamente.
                  </p>
                </li>
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Uso extensivo de bibliotecas como Pandas e Matplotlib.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
