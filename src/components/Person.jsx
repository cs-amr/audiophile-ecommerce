export default function Person() {
  return (
    <section className="person">
      <div className="container">
        <div>
          <h3>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <picture>
          <source
            srcSet="src\images\shared\mobile\image-best-gear.jpg"
            media="(max-width:480px)"
          />
          <source
            srcSet="src\images\shared\tablet\image-best-gear.jpg"
            media="(max-width:990px)and (min-width:480px)"
          />
          <source
            srcSet="src\images\shared\desktop\image-best-gear.jpg"
            media="(min-width:990px)"
          />
          <img src="src\images\shared\desktop\image-best-gear.jpg" alt="" />
        </picture>
      </div>
    </section>
  );
}
