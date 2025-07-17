import React from "react";

function Card() {
    return (
        <>
        <div className="product-card">
  <a href="/" className="product-card__image-link">
    <img
      className="product-card__image"
      src="https://placehold.co/100x100"
      alt="product_image1"
    />
  </a>
  <div className="product-card__content">
    <a href="/">
      <h5 className="product-card__title">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h5>
    </a>
    <div className="product-card__rating">
      {[...Array(4)].map((_, i) => (
        <svg
          key={i}
          className="product-card__star"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523...Z" />
        </svg>
      ))}
      <svg
        className="product-card__star--empty"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523...Z" />
      </svg>
      <span className="product-card__rating-value">4.0</span>
    </div>
    <div className="product-card__footer">
      <span className="product-card__price">$599</span>
      <a href="/" className="product-card__button">Add to cart</a>
    </div>
  </div>
</div>

        </>
    )
}

export default Card