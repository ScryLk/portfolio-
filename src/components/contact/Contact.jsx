import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Status da mensagem

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
      } else {
        setStatus("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      setStatus("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Me envie uma mensagem!</h2>

      <div className="contact__container container grid">
        {/* Cartões de contato */}
        <div className="contact__content">
          <h3 className="contact__title">Entre em contato</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">lucaskepler992@gmail.com</span>
              <a
                href="mailto:lucaskepler992@gmail.com"
                className="contact__button"
              >
                Contatar{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">(55) 99133-3502</span>
              <a
                href="https://api.whatsapp.com/send?phone=5555991333502&text=Olá!"
                className="contact__button"
              >
                Contatar{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">lucas.kepler</span>
              <a
                href="https://www.facebook.com/messages/t/100003504016808"
                className="contact__button"
              >
                Contatar{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Formulário de contato */}
        <div className="contact__content">
          <h3 className="contact__title">Me escreva uma mensagem</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Escreva seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insira seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Escreva a sua mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="button button--flex" type="submit">
              Enviar
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
          {status && <p className="contact__status">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
