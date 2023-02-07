import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <ul>
          <li>
            <Link to="/headphones">
              <div>
                <img src="/images/shared/desktop/image-headphones.png" alt="" />
                <h3>HEADPHONES</h3>
                <div className="categorieslink">
                  <span>SHOP</span>
                  <img
                    src="/images/shared/desktop/icon-arrow-right.svg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/speakers">
              <div>
                <img
                  src="/images/shared/desktop/image-speakers.png"
                  alt="speakers"
                />
                <h3>SPEAKERS</h3>
                <div className="categorieslink">
                  <span>SHOP</span>
                  <img
                    src="/images/shared/desktop/icon-arrow-right.svg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/earphones">
              <div>
                <img
                  src="/images/shared/desktop/image-earphones.png"
                  alt="earphones"
                />
                <h3>EARPHONES</h3>
                <div className="categorieslink">
                  <span>SHOP</span>
                  <img
                    src="/images/shared/desktop/icon-arrow-right.svg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
