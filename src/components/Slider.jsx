import React, { useState } from 'react';

import data from '../data';

import './Slider.css';

const Slider = () => {
  const [mainPhoto, setMainPhoto] = useState(data[0].image);

  const changeImage = (e) => {
    setMainPhoto(e.currentTarget.src);
  };

  return (
    <div className="slider">
      <header className="slider__header">
        <img className="slider__header-img" src={mainPhoto} alt="header-img" />
      </header>
      <main className="slider__main">
        {data.map((item) => (
          <div key={item.id} className="slider__main-img">
            <img src={item.image} alt={item.name} onClick={changeImage} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Slider;
