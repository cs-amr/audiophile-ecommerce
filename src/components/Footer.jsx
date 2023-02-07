import Navbar from "./Navbar";
export default function Footer() {
  return (
    <footer>
      <Navbar />
      <div className="container">
        <div>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <h6>Copyright 2021. All Rights Reserved</h6>
        </div>
        <ul className="icons">
          <li>
            <a href="https://www.facebook.com/">
              <img src="/images/shared/desktop/icon-facebook.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src="/images/shared/desktop/icon-instagram.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <img src="images/shared/desktop/icon-twitter.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
