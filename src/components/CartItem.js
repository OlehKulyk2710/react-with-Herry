import proTypes from 'prop-types';

const CartItem = ({ item }) => {
  const amount = item.price * item.count;
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>{item.price}$</span>

      <div>
        <button type="button">-</button>
        <span>{item.count}</span>
        <button type="button">+</button>
      </div>
      <span>{amount}$</span>
      <button type="button">x</button>
    </div>
  );
};

CartItem.proTypes = {
  item: proTypes.shape({
    name: proTypes.string.isRequired,
    count: proTypes.number.isRequired,
    price: proTypes.number.isRequired,
  }),
};
export default CartItem;
