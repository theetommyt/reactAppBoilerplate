import React from 'react';
import ReactDOM from 'react-dom';
require('./main.scss');

const Home = () =>

  <div className="container">
    <header>
      header
    </header>
    <main>
      <section className="home-topLanding">
        <p>top landing</p>
      </section>
      <section className="home-companyType">
        company type
      </section>
      <section className="home-tutorial">
        tutorials
      </section>
      <section className="home-videoTips">
        video tips
      </section>
      <section className="home-testamonials">
        testamonials
      </section>
      <section className="home-tutorial">
        tutorials (what?)
      </section>
      <section className="home-bottomLanding">
        bottom landing
      </section>
    </main>
    <footer>
      footer
    </footer>
  </div>

;

export default Home;