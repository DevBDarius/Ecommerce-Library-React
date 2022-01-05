import React, { useState } from 'react';
import Book from '../components/ui/Book';

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks(filter) {
    // need to use useState function, because books are immutable
    // slice is used to make a copy of the array (again, because original is immutable)
    return filter === 'LOW_TO_HIGH' ?
      setBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))) :
      filter === 'HIGH_TO_LOW' ?
        setBooks(books.slice().sort((b, a) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))) :
        setBooks(books.slice().sort((b, a) => a.rating - b.rating))
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">All Books</h2>
                <select defaultValue="DEFAULT" id="filter" onChange={(event) => filterBooks(event.target.value)}>
                  <option value="DEFAULT" disabled>Sort </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) =>
                  <Book book={book} key={book.id} />)
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
