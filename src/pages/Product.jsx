import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import Loading from "../components/Loading";
import { useCart } from "../Context/CartContext";
export default function Product() {
  const { productId } = useParams();
  const { products, isLoading } = useDataContext();
  const [productCount, setProductCount] = useState(1);
  const product = products.products.find(
    (product) => product.slug === productId
  );
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
  const { first, second, third } = gallery;

  const { cartItems, setCartItems } = useCart();
  function handleClick() {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.slug === slug);
      if (exist) {
        const items = prev.map((item) => {
          if (item.slug === slug) {
            return {
              slug: slug,
              productCount: productCount + item.productCount,
            };
          } else {
            return item;
          }
        });
        return items;
      } else {
        return [...prev, { slug: slug, productCount: productCount }];
      }
    });
  }

  return (
    <section className="product">
      <div className="container">
        <div className="product-details">
          <picture>
            <source media="(min-width:1110px )" srcSet={image["desktop"]} />
            <source
              media="(min-width:480px ) and (max-width:990px)"
              srcSet={image["tablet"]}
            />
            <source media="(max-width:480px )" srcSet={image["mobile"]} />
            <img src={image["mobile"]} alt="productImage" />
          </picture>
          <div className="details">
            {isNew && <span className="newProductSpan">NEW PRODUCT</span>}
            <h3>{name}</h3>
            <p>{description}</p>
            <span className="price">${price}</span>
            <div className="addToCart">
              <div>
                <button
                  onClick={() => {
                    if (productCount !== 0) {
                      setProductCount((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{productCount}</span>
                <button
                  onClick={() => {
                    setProductCount((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button className="link" onClick={handleClick}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <section className="product-info">
          <div className="features">
            <h4>FEATURES</h4>
            <p>{features}</p>
          </div>
          <div className="inthebox">
            <h4>IN THE BOX</h4>
            <ul>
              {includedItems.map((item, index) => {
                return (
                  <li key={index}>
                    <span>
                      {item["quantity"]}x {}
                    </span>
                    <span>{item["item"]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="product-images">
          <picture>
            <source media="(min-width:1110px )" srcSet={first["desktop"]} />
            <source
              media="(min-width:480px ) and (max-width:990px)"
              srcSet={first["tablet"]}
            />{" "}
            <source media="(max-width:480px )" srcSet={first["mobile"]} />
            <img src={first["mobile"]} alt="productImage" />
          </picture>
          <picture>
            <source media="(min-width:1110px )" srcSet={second["desktop"]} />
            <source
              media="(min-width:480px ) and (max-width:990px)"
              srcSet={second["tablet"]}
            />
            <source media="(max-width:480px )" srcSet={second["mobile"]} />
            <img src={second["mobile"]} alt="productImage" />
          </picture>
          <picture>
            <source media="(min-width:1110px )" srcSet={third["desktop"]} />
            <source
              media="(min-width:480px ) and (max-width:990px)"
              srcSet={third["tablet"]}
            />
            <source media="(max-width:480px )" srcSet={third["mobile"]} />
            <img src={third["mobile"]} alt="productImage" />
          </picture>
        </section>
        <section className="others">
          <h4>You may also like</h4>
          <div className="products">
            {others.map((product, index) => {
              const { mobile, tablet, desktop } = product["image"];
              return (
                <div className="product" key={index}>
                  <picture>
                    <source media="(min-width:1110px)" srcSet={desktop} />
                    <source
                      media="(min-width:480px) and (max-width:990px)"
                      srcSet={tablet}
                    />
                    <source media="(max-width:480px)" srcSet={mobile} />
                    <img src={mobile} alt={product["name"]} />
                  </picture>
                  <span className="product-name">{product["name"]}</span>
                  <Link to={product["slug"]} className="link">
                    SEE PRODUCT
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
