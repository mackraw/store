import propTypes from 'prop-types';
import { FiStar } from 'react-icons/fi';
import { useState } from 'react';

function Star({ selected = false, onSelect = (f) => f }) {
  return <FiStar fill={selected ? '#010118' : 'none'} onClick={onSelect} />;
}

const createArray = (length) => [...Array(length)];

export default function StarRating({ numStars = 5, rating }) {
  const [stars, setStars] = useState(rating);

  return (
    <>
      {createArray(numStars).map((n, i) => (
        <span className="star-container">
          <Star key={i} selected={stars > i} onSelect={() => setStars(i + 1)} />
        </span>
      ))}
      <p className="star-rating-description">
        Rated {stars} out of {numStars}
      </p>
    </>
  );
}

StarRating.propTypes = {
  numStars: propTypes.number,
  rating: propTypes.number,
};

Star.propTypes = {
  selected: propTypes.bool,
  onSelect: propTypes.func,
};
