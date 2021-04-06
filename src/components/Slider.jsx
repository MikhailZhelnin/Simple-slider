import React, { useState } from 'react';

import './Slider.css';

const images = [
  {
    id: 1,
    name: 'forest',
    image:
      'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
  },
  {
    id: 2,
    name: 'lake',
    image:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    name: 'tree',
    image:
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const Slider = () => {
  const [mainPhoto, setMainPhoto] = useState(images[0].image);

  const changeImage = (e) => {
    setMainPhoto(e.currentTarget.src);
  };

  return (
    <div className="slider">
      <header className="slider__header">
        <img className="slider__header-img" src={mainPhoto} alt="header-img" />
      </header>
      <main className="slider__main">
        {images.map((item) => (
          <div key={item.id} className="slider__main-img">
            <img src={item.image} alt={item.name} onClick={changeImage} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Slider;
