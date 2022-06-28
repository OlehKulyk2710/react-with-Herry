import InputForm from './CartInputForm';
import Loader from './Loader';
import CartItemList from './CartItemList';
import TotalAmount from './TotalAmount';

const initialState = [
  { id: '1', name: 'printer', price: 110, count: 2 },
  { id: '2', name: 'RAM', price: 30, count: 1 },
  { id: '3', name: 'motherboard', price: 150, count: 1 },
];

function Cart() {
  return (
    <div className="cart">
      <InputForm />
      <Loader />
      <CartItemList items={initialState} />
      <TotalAmount items={initialState} />
    </div>
  );
}

export default Cart;
