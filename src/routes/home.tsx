import React from 'react';
import Phone from '../assets/images/phone.png';

const Home = () => {
  return (
    <section>
      <div className="banner">
        <div className="container with-flex">
          <img className="banner-image" src={Phone} alt="Phone" />
          <div className="banner-text">
            <h1>Here is a headline</h1>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
