import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return props.display ? (
    <div className="popup_overlay">
      <div className="popup_window">
        <h3 className="popup_message">Formularz został pomyślnie wysłany!</h3>
        <button className="popup_close" onClick={props.hide}>
          ZAMKNIJ
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
