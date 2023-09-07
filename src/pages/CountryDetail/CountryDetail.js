import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { searchCountryByCode } from '../../redux/countrySlice';
import './CountryDetail.css';

function CountryDetail() {
  const countryData = useSelector((state) => state.countries.countryData);
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    if (code) {
      dispatch(searchCountryByCode(code));
    }
  }, [dispatch, code]);

  return (
    <section className="countryDetails">
      <Link to="/">
        <button type="button" className="backBtn">
          <FontAwesomeIcon icon={faArrowLeft} />
          {' '}
          Back
        </button>
      </Link>
      {countryData.map((data) => (
        <div className="county-details" key={data.name.common}>
          <div className="name">
            <img src={data.flags.png} alt={data.name.common} />
            <div className="detail-info">
              <h1>{data.name.common}</h1>
              <span>{data.population}</span>
            </div>
          </div>
          <div className="countryDet">country details</div>
          <ul className="listDetails">
            <li>
              <span className="listTitle">Official Name:</span>
              {' '}
              <span className="listDetail">{data.name.official}</span>
            </li>
            <li>
              <span className="listTitle">Region:</span>
              {' '}
              <span className="listDetail">{data.region}</span>
            </li>
            <li>
              <span className="listTitle">Subregion:</span>
              {' '}
              <span className="listDetail">{data.subregion}</span>
            </li>
            <li>
              <span className="listTitle">Capital:</span>
              {' '}
              <span className="listDetail">{data.capital}</span>
            </li>
            <li>
              <span className="listTitle">Continent:</span>
              {' '}
              <span className="listDetail">{data.continents}</span>
            </li>
            <li>
              <span className="listTitle">Currency:</span>
              {' '}
              <span className="listDetail">
                {Object.values(data.currencies)
                  .map((item) => item.name)
                  .join(',')}
              </span>
            </li>
            <li>
              <span className="listTitle">Languages:</span>
              {' '}
              <span className="listDetail">
                {Object.values(data.languages)
                  .map((item) => item)
                  .join(',')}
              </span>
            </li>
            <li>
              <span className="listTitle">GoogleMaps:</span>
              <Link to={data.maps.googleMaps}>Google Maps</Link>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}

export default CountryDetail;
