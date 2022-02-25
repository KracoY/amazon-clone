import React from "react";
import CurrencyFormat from "react-currency-format";
import "./stylesheets/Subtotaal.css";
import { UseStateValue } from "./StateProvider";

function Subtotaal() {
  const [{ basket }, dispatch] = UseStateValue();

  return (
    <div className="subtotaal">
      <CurrencyFormat

        renderText={(value) => (
         <>
          <p>
            Subtotaal ({basket.length} items): <strong>{Subtotaal}</strong>
          </p>
          <small>
          <input type="checkbox"/>Deze bestelling bevat een cadeau
          </small>
          </>
        )}

        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />

      <button>Verder naar bestellen</button>
    </div>
  );
}

export default Subtotaal;
