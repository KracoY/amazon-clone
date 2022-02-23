import React from "react";
import "./stylesheets/Product.css";

function product({ id, title, image, price, rating }) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  };


  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="image not found" />
      <button onClick={addToBasket}>Voeg toe aan winkelwagen</button>
    </div>
  );
}

export default product;
