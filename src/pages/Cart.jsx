import React from 'react';

const Cart = ({ cart, changeQuantity }) => {
  
  function total() {
    if (cart.length === 0) {
      return -1;
    }
    // console.log(cart[0].originalPrice)
    return cart.reduce((a, b) => a + ((b.salePrice || b.originalPrice) * b.quantity), 0)
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => {
                  const bookPrice = (book.salePrice || book.originalPrice).toFixed(2)
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img src={book.url} alt="" className="cart__book--img" />
                        <div className="cart__book--info">
                          <span className="cart__book--title">{book.title}</span>
                          <span className="cart__book--price">£{bookPrice}</span>
                          <button className="cart__book--remove">Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input 
                        type="number" 
                        min={0} 
                        max={99} 
                        className='cart__input'
                        value={book.quantity}
                        onChange={(event) => changeQuantity(book, event.target.value)} />
                      </div>
                      <div className="cart__total">£{(bookPrice * book.quantity).toFixed(2)}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>£{(total() * 0.9).toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>£{(total() * 0.1).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>£{(total()).toFixed(2)}</span>
              </div>
              <button className="btn btn__checkout no-cursor">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;