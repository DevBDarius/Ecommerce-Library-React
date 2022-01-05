import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../components/ui/Book';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

const Bookinfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to='/books' className='book__link'>
                <FontAwesomeIcon icon='arrow-left' />
              </Link>
              <Link to="/books" className='book__link'>
                <h2 className="book__selected--title--top">
                  Books
                </h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className='book__selected--img' src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Crack the coding interview</h2>
                <Rating rating={books[0].rating} />
                <div className="book__selected--price">
                  <Price book={books[0]} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, eligendi autem. Necessitatibus labore corrupti repudiandae illum qui porro totam optio, sed ipsum, quod dicta eveniet sequi officia nemo rerum! Aliquam.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, eligendi autem. Necessitatibus labore corrupti repudiandae illum qui porro totam optio, sed ipsum, quod dicta eveniet sequi officia nemo rerum! Aliquam.
                  </p>
                </div>
                <button className="btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>
            <Book book={books[0]} />
            <Book book={books[0]} />
            <Book book={books[0]} />
            <Book book={books[0]} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bookinfo;
