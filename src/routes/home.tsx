import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../constants';
import Phone from '../assets/images/phone.png';
import Favorite from '../assets/images/favorite.svg';
import Bell from '../assets/images/bell.svg';
import Star from '../assets/images/Star.svg';
import Camera from '../assets/images/camera.svg';
import Lock from '../assets/images/lock.svg';
import Pin from '../assets/images/pin.svg';
import Lead from '../assets/images/lead1.png';

const Home = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const templateParams = {
    from_name: email,
    to_name: 'FlatPlan',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          alert('Thank you for joining our waitlist!');
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      )
      .finally(() => {
        if (emailInput.current) emailInput.current.value = '';
        setEmail('');
        setIsSending(false);
      });
  };
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
      <div className="waitlist">
        <div className="container">
          <h2>Join the waitlist</h2>
        </div>
        <img src={Lead} alt="USB cable 2" />
        <img src={Lead} alt="USB cable 1" />
      </div>
      <div className="email-area">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="addYourEmail">Add your email</label>
            <input
              ref={emailInput}
              required
              type="email"
              placeholder="Write e-mail address..."
              onChange={handleChange}
            />
            <button type="submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Subscribe'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
