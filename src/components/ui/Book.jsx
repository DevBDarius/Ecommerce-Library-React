import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

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
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">{book.title}</Link>
      </div>
      <Rating rating={book.rating}/>
      <Price book={book}/>
    </div>
  );
}

export default Book;
