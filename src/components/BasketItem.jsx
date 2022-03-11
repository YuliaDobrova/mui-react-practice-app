const BasketItem = (props) => {
  return (
    <li className="list-group-item">
      {props.name} {props.price}UAH x{props.quantity}
      <button
        className="btn btn-primary"
        onClick={() => props.setOrder(props.id)}
      >
        Remove from cart
      </button>
    </li>
  );
};

export default BasketItem;
