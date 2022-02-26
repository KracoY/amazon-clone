import emailjs from "emailjs-com";
import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";
// $ npm install --save sweetalert2

export default function ContactUs() {
  //npm i emailjs-com --save

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "my_mail",
        "template_o4hux13",
        e.target,
        "user_iggiG7jatamF6LywLSrem"
      )
      .then(
        (result) => {
          console.log("result" + result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your mail has arrived.",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container main">
      <h1 className="title">Contactformulier</h1>
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control form__naam"
              placeholder="Naam"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto ">
            <input
              type="email"
              className="form-control form__mail"
              placeholder="Email Adres"
              name="email"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control form__onderwerp"
              placeholder="Onderwerp"
              name="subject"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control form__bericht"
              id=""
              cols="30"
              rows="8"
              placeholder="Uw bericht"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto ">
            <input
              type="submit"
              className="btn btn-info verzend"
              value="Verzend bericht"
            ></input>
          </div>
        </div>
      </form>
      {/*<button
        id="btn"
        onClick={() => (window.location = "mailto:enderyuruk9932@gmail.com")}
      >
        Mail Me
  </button>*/}
    </div>
  );
}
