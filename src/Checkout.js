import React from "react";
import "./stylesheets/Checkout.css";
import { UseStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotaal from "./Subtotaal";

function Checkout() {
  const [{ basket }] = UseStateValue();
  return (
    <div className="checkout">
      {/*<img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/0CC_Amazon1._CB423492668_.jpg"
        alt="Image not found"
  />*/}
      <div checkout_left>
        {basket.length === 0 ? (
          <div>
            <h2 className="checkout__Title">Je winkelwagen is leeg</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__Title">Je winkelwagen</h2>

            {/*lijst met alle items in je winkelwagen*/}

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
        <Subtotaal/>
        
        </div>
      )}

    </div>
  );
}

export default Checkout;
