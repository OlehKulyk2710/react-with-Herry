const InputForm = () => (
  <div className="cart-input-form">
    <form>
      <label>
        <span>name</span>
        <input type="text"></input>
      </label>
      <label>
        <span>price</span>
        <input type="number"></input>
      </label>

      <button type="button">+ add</button>
    </form>
  </div>
);
export default InputForm;
