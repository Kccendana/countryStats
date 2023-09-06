import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { setRegion } from '../../../redux/countrySlice';

import './filter.css';

const Filter = () => {
  const regions = ['Africa', 'Oceania', 'Americas', 'Asia', 'Europe'];
  const [filter, setFilter] = useState('');
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const dispatch = useDispatch();

  const handleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  useEffect(() => {
    if (filter !== '') {
      dispatch(setRegion(filter.toLocaleLowerCase()));
    }
  }, [dispatch, filter]);
  return (
    <section className="filter-container">
      <div className="filter" role="button" onClick={handleDropdown} onKeyDown={handleDropdown} tabIndex={-1}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <FontAwesomeIcon icon={faAngleDown} />
      </div>

      {displayDropdown ? (
        <div className="dropdown">
          {regions.map((item) => (
            <div
              key={item}
              className="dropdown-item"
              onClick={() => {
                setFilter(item);
                handleDropdown();
              }}
              onKeyDown={() => {
                setFilter(item);
                handleDropdown();
              }}
              tabIndex={-1}
              role="button"
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
