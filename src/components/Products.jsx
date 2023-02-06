import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="zx9-home">
          <picture>
            <source
              srcSet="src\images\home\mobile\image-speaker-zx9.png"
              media="(max-width:480px)"
            />
            <source
              srcSet="src\images\home\tablet\image-speaker-zx9.png"
              media="(max-width:990px) and (min-width:480px)"
            />
            <source
              srcSet="src\images\home\desktop\image-speaker-zx9.png"
              media="(min-width:990px)"
            />
            <source />
            <img src="src\images\home\mobile\image-speaker-zx9.png" alt="zx9" />
          </picture>
          <div>
            <h3>ZX9 SPEAKER</h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/" className="link">
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className="zx7-home">
          <picture>
            <source
              srcSet="src\images\home\mobile\image-speaker-zx7.jpg"
              media="(max-width:480px)"
            />
            <source
              srcSet="src\images\home\desktop\image-speaker-zx7.jpg"
              media="(max-width:990px) and (min-width:480px)"
            />
            <source
              srcSet="src\images\home\desktop\image-speaker-zx7.jpg"
              media="(min-width:990px)"
            />
            <source />
            <img src="src\images\home\mobile\image-speaker-zx7.jpg" alt="zx7" />
          </picture>
          <div>
            <h3>ZX7 SPEAKER</h3>
            <Link to="/" className="link">
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className="yx1-home">
          <picture>
            <source
              srcSet="src\images\home\mobile\image-earphones-yx1.jpg"
              media="(max-width:480px)"
            />
            <source
              srcSet="src\images\home\tablet\image-earphones-yx1.jpg"
              media="(max-width:990px) and (min-width:480px)"
            />
            <source
              srcSet="src\images\home\desktop\image-earphones-yx1.jpg"
              media="(min-width:990px)"
            />
            <source />
            <img
              src="src\images\home\mobile\image-earphones-yx1.jpg"
              alt="yx1"
            />
          </picture>
          <div>
            <h3>yx1 SPEAKER</h3>
            <Link to="/" className="link">
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
