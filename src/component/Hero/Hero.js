import React from 'react';
import { useSelector } from 'react-redux';
import asia from '../../asset/asia.svg';
import africa from '../../asset/africa.svg';
import oceania from '../../asset/oceania.svg';
import americas from '../../asset/americas.svg';
import world from '../../asset/world.svg';
import europe from '../../asset/europe.svg';
import './Hero.css';

function Hero() {
  const { region, countries } = useSelector((state) => state.countries);

  const regionImages = {
    asia,
    africa,
    oceania,
    americas,
    europe,
    world,
  };

  return (
    <section className="hero">
      <img src={regionImages[region] || regionImages.world} alt={region} />
      <div className="continent-detail">
        <h1>{region.toUpperCase() || 'WORLD'}</h1>
        <p>
          {countries.length}
          {' '}
          countries
        </p>
      </div>
    </section>
  );
}

export default Hero;
