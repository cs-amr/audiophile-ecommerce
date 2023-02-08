import React from "react";
import { Link } from "react-router-dom";

export default function CategoryProduct({ product }) {
  const {
    id,
    slug,
    name,
    shortName,
    image,
    cartImage,
    category,
    categoryImage,
    isNew,
    price,
    description,
    features,
    includedItems,
    gallery,
    others,
  } = product;
  return (
    <section className="category-product">
      <div className="container">
        <div>
          <picture>
            <source
              srcSet={categoryImage["desktop"]}
              media="(min-width:1110px)"
            />
            <source
              srcSet={categoryImage["tablet"]}
              media="(max-width:990px) and (min-width:480px)"
            />
            <source
              srcSet={categoryImage["mobile"]}
              media="(max-width:480px)"
            />
            <img src={categoryImage["desktop"]} alt="yx1" />
          </picture>
        </div>
        <div className="info">
          {isNew && <span className="newProductSpan">NEW PRODUCT</span>}
          <h3>{name}</h3>
          <p>{description}</p>
          <Link to={slug} className="link">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
