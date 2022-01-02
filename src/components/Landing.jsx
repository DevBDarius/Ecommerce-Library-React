import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>UK's most awarded online library platform</h1>
            <h2>Find your dream book with <span className="purple">Library</span></h2>
            <a href="#features" className='header__description--link'>
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" className='header__img' />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
