import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = ({rating}) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, i) => <FontAwesomeIcon icon="star" key={i} />)}
      {(Math.floor(rating) !== rating) && <FontAwesomeIcon icon="star-half-alt" />} {/* If book rating is NOT decimal number, then display a half star */}
    </div>
  );
}

export default Rating;
