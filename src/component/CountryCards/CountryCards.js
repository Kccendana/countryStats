import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { countriesByRegion, getAllCountries } from '../../redux/countrySlice';
import './CountryCards.css';

function formatPopulation(population) {
  // Use regular expression to format population with commas
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function CountryCards() {
  const { countries, region } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (region) {
      dispatch(countriesByRegion(region));
    } else {
      dispatch(getAllCountries());
    }
  }, [dispatch, region]);

  return (
    <div>
      <p className="subtitle">{region ? `Countries in ${region.charAt(0).toUpperCase() + region.slice(1)}` : 'All countries'}</p>
      <ul className="countryList">
        {countries.map((country) => (
          <li key={country.name.common}>
            <Link to={`/${country.cca2}`}>
              <div className="cards">
                <div className="img-con">
                  <img className="flag" src={country.flags.png} alt={country.name.common} />
                  <div className="overlay" />
                </div>
                <div className="info">
                  <h2>{country.name.common}</h2>
                  <span>{formatPopulation(country.population)}</span>
                </div>
                <div className="button"><FontAwesomeIcon icon={faArrowRightLong} /></div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryCards;
