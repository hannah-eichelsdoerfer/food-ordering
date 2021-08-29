import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

// onClick on the button is passed down from App.jsx to Header.jsx to here (props-chain - we could instead use context but here its okay like this)

const HeaderCartButton = (props) => {
  const [addedItemBounce, setAddedItemBounce] = useState(false);
  const cartCtx = useContext(CartContext); // now this will reevaluate whenever the context changes (it changes when we do update it in the cart provider component)
  const { items } = cartCtx; // Object Destructuring

  const cartItemsCount = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${addedItemBounce ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAddedItemBounce(true);

    const timer = setTimeout(() => {
      setAddedItemBounce(false);
    }, 300);

    // always good practice to clean up side-effects
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
