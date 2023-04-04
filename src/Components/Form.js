import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";
import Popup from "./Popup";

const Form = () => {
  const [formValues, setFormValues] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientLocation: "",
    clientClause: false,
  });

  const [formError, setFormError] = useState({});
  const [formSubmitPressed, setFormSubmitPressed] = useState(false);
  const [formSubmitValid, setFormSubmitValid] = useState(false);

  const formUpdateHandler = (event) => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value });
  };

  const formClauseHandler = (event) => {
    setFormValues({ ...formValues, clientClause: event.target.checked });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormError(formValidation(formValues));
    setFormSubmitPressed(true);
  };

  const formValidation = (values) => {
    const error = {
      clientNameError: false,
      clientEmailError: false,
      clientPhoneError: false,
      clientLocationError: false,
      clientClauseError: false,
    };
    const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneValidation =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{3})(?: *x(\d+))?\s*$/;
    if (!values.clientName) {
      error.clientNameError = true;
    }
    if (!values.clientEmail) {
      error.clientEmailError = true;
    } else if (!emailValidation.test(values.clientEmail)) {
      error.clientEmailError = true;
    }
    if (!values.clientPhone) {
      error.clientPhoneError = true;
    } else if (!phoneValidation.test(values.clientPhone)) {
      error.clientPhoneError = true;
    }
    if (!values.clientLocation) {
      error.clientLocationError = true;
    }
    if (!values.clientClause) {
      error.clientClauseError = true;
    }
    return error;
  };

  useEffect(() => {
    if (
      Object.values(formError).every((value) => value === false) &&
      formSubmitPressed
    ) {
      setFormSubmitValid(true);
    }
    console.log(
      "Valid: " + formSubmitValid + ", submit pressed: " + formSubmitPressed
    );
  }, [formError]);

  const closePopupHandler = () => {
    setFormSubmitValid(false);
  };

  return (
    <div className="right_section">
      <h3 className="right_title">
        Jesteś zainteresowany/na?
        <br />
        Skontaktuj się z nami.
      </h3>
      <Popup display={formSubmitValid} hide={closePopupHandler} />
      <form id="contact_form" className="right_form" onSubmit={submitHandler}>
        <input
          className={`${formError.clientNameError ? "invalid" : ""}`}
          id="clientName"
          type="text"
          placeholder="Imię, nazwisko"
          value={formValues.clientName}
          onChange={formUpdateHandler}
        ></input>
        <input
          className={`${formError.clientEmailError ? "invalid" : ""}`}
          id="clientEmail"
          type="text"
          placeholder="E-mail"
          value={formValues.clientEmail}
          onChange={formUpdateHandler}
        ></input>
        <input
          className={`${formError.clientPhoneError ? "invalid" : ""}`}
          id="clientPhone"
          type="text"
          placeholder="Telefon"
          value={formValues.clientPhone}
          onChange={formUpdateHandler}
        ></input>
        <select
          className={`${formError.clientLocationError ? "invalid" : ""}`}
          id="clientLocation"
          value={formValues.clientLocation}
          onChange={formUpdateHandler}
        >
          <option value="" disabled>
            Miasto, w którym szukam mieszkania
          </option>
          <option value="katowice">Katowice</option>
          <option value="chorzow">Chorzów</option>
          <option value="knurow">Knurów</option>
          <option value="chrzanow">Chorzów</option>
          <option value="oswiecim">Oświęcim</option>
        </select>
        <input
          className={`form_checkbox${
            formError.clientClauseError ? "_invalid" : ""
          }`}
          id="clientClause"
          type="checkbox"
          checked={formValues.clientClause}
          onChange={formClauseHandler}
        ></input>
        <p className="form_clause">
          * Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
          przesyłania mi przez GRUPĘ DOMBUD (współadministratorzy), informacji w
          celach nawiązania kontaktu i korespondencji, zgodnie z postanowieniami
          RODO. Oświadczam, że zapoznałem/am się z Zasadami Przetwarzania Danych
          z dnia 25 maja 2018 r. dostępnymi na stronie internetowej
          www.dombud.pl i akceptuję ich postanowienia. Pozostaję świadomy/a, że
          mogę w każdej chwili wycofać udzieloną zgodę na przetwarzanie danych
          osobowych we wskazanym powyżej celu poprzez wysłanie maila w tym
          przedmiocie na adres mailowy dombud@dombud.pl.
        </p>
      </form>
      <input
        type="submit"
        value="WYŚLIJ FORMULARZ"
        className="form_submit"
        form="contact_form"
      />
    </div>
  );
};

export default Form;
