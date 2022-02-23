import React from "react";
import "./stylesheets/Home.css";
import Product from "./product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        className="home__image"
      ></img>

      <div className="home__row">
        <Product
          id="000001"
          title="Apple MacBook Pro MKGQ3N/A - 14 inch - Apple M1 Pro - 1 TB - Space Grey"
          price={2549}
          rating={5}
          image="https://media.s-bol.com/kOMWjkV8rz1v/2x84J91/1200x723.jpg"
        />

        <Product
          id="000002"
          title="Google Chromecast 3 HDMI Streaming Stick Zwart"
          price={36.99}
          rating={4}
          image="https://media.s-bol.com/R5nnZnWgjmrw/rRpEjxL/1028x1200.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="000003"
          title="TP-Link TL-SG116 - Switch"
          price={59.99}
          rating={5}
          image="https://media.s-bol.com/wK8yvXAZQz98/550x113.jpg"
        />

        <Product
          id="000004"
          title="Ducky Mecha Mini RGB Gaming toetsenbord"
          price={143.80}
          rating={4}
          image="https://media.s-bol.com/gQ2zYqGlXG3Y/6R9pME7/1200x772.jpg"
        />

        <Product
          id="000005"
          title="Logitech MX Master 3 - Draadloze Muis met Bluetooth en USB ontvanger - Zwart"
          price={89.99}
          rating={5}
          image="https://media.s-bol.com/g6R0BA66ROVD/gZyvmxD/808x1200.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="000006"
          title="Philips 2200 Serie EP2224/40 - Espressomachine"
          price={349}
          rating={4}
          image="https://media.s-bol.com/R4WONEg03Ez/699x1200.jpg"
        />

        <Product
          id="000007"
          title="Magnetisch Weekplanner whiteboard - A3 - Planbord -To Do Planner"
          price={22.95}
          rating={4}
          image="https://media.s-bol.com/mwZJzlqGPgJE/1200x894.jpg"
        />

        <Product
          id="000008"
          title="Harry Potter and the Philosopher's Stone"
          price={28.79}
          rating={5}
          image="https://media.s-bol.com/NpPwjE408pk2/71wKGvG/550x817.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="000009"
          title="AMD Ryzen 9 5950X Custom Loop Gaming PC - RTX 3090 24GB - 64GB RAM - 4TB SSD (PCIe 4) - WiFi / Bluetooth - REV300"
          price={7250}
          rating={4}
          image="https://media.s-bol.com/J7X2YEOkgmkv/rR77gy4/788x1200.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
