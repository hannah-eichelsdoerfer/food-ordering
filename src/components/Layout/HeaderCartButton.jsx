import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

// onClick on the button is passed down from App.jsx to Header.jsx to here (props-chain - we could instead use context but here its okay like this)

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext); // now this will reevaluate whenever the context changes (it changes when we do update it in the cart provider component)

  const cartItemsCount = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
