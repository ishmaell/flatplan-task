import React from 'react';
import Phone from '../assets/images/phone.png';
import Favorite from '../assets/images/favorite.svg';
import Bell from '../assets/images/bell.svg';
import Star from '../assets/images/Star.svg';
import Camera from '../assets/images/camera.svg';
import Lock from '../assets/images/lock.svg';
import Pin from '../assets/images/pin.svg';

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
      <div className="useage">
        <div className="container">
          <h2>Why Use Our Platform</h2>
          <div className="useage-items">
            <div className="useage-item">
              <img src={Favorite} alt="Favorite" />
              <div className="useage-item-text">
                <p>The best application</p>
                <p>Donec facilis tortor ut lorem ipsum dolor sit amet...</p>
              </div>
            </div>
            <div className="useage-item">
              <img src={Lock} alt="Lock" />
              <div className="useage-item-text">
                <p>Secure shopping</p>
                <p>Donec facilis tortor ut lorem ipsum dolor sit amet...</p>
              </div>
            </div>
            <div className="useage-item">
              <img src={Star} alt="Star" />
              <div className="useage-item-text">
                <p>Rate and review</p>
                <p>Donec facilis tortor ut lorem ipsum dolor sit amet...</p>
              </div>
            </div>
            <div className="useage-item">
              <img src={Bell} alt="Bell" />
              <div className="useage-item-text">
                <p>Get notifications</p>
                <p>Donec facilis tortor ut lorem ipsum dolor sit amet...</p>
              </div>
            </div>
            <div className="useage-item">
              <img src={Camera} alt="Camera" />
              <div className="useage-item-text">
                <p>Send video</p>
                <p>Donec facilis tortor ut lorem ipsum dolor sit amet...</p>
              </div>
            </div>
            <div className="useage-item">
              <img src={Pin} alt="Pin" />
              <div className="useage-item-text">
                <p>Fast buy and sell.</p>
                <p>Donec facilis tortor ut lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
