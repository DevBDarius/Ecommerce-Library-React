import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  // function renderRating(rating) {
  //   const stars = ""

  //   for (let i = 0; i < rating; i++) {
  //     stars += <FontAwesomeIcon icon="star" />
  //   }

  //   return stars
  // }
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/1" className="book__title--link">{book.title}</Link>
      </div>
      <div className="book__ratings">
        {new Array(Math.floor(book.rating)).fill(0).map((_, i) => <FontAwesomeIcon icon="star" key={i}/>)}
        {(Math.floor(book.rating) !== book.rating) && <FontAwesomeIcon icon="star-half-alt"/>} {/* If book rating is NOT decimal number, then display a half star */}
      </div>
      <div className="book__price">
        {book.salePrice ?
          (<><span className="book__price--normal">£{book.originalPrice.toFixed(2)}</span>
            £{book.salePrice.toFixed(2)}</>) :
          <>£{book.originalPrice.toFixed(2)}</>}
      </div>
    </div>
  );
}

export default Book;
