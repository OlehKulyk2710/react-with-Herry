import propTypes from 'prop-types';

const TotalAmount = ({ items }) => {
  const total = items.reduce((prev, item) => {
    return prev + item.price * item.count;
  }, 0);

  return <p>Total amount: {total}$</p>;
};

TotalAmount.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      price: propTypes.number.isRequired,
      count: propTypes.number.isRequired,
    })
  ),
};

export default TotalAmount;
