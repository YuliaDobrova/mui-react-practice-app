// компонент более не используется!!!

import BasketItem from "./BasketItem";

const BasketList = (props) => {
  const { order, removeFromOrder } = props;

  if (!order.length) {
    return (
      <ul className="basket list-group col-md-4">
        <li className="list-group-item active">Cart</li>
        <li className="list-group-item">No products</li>
      </ul>
    );
  }

  return (
    <ul className="basket list-group col-md-4">
      <li className="list-group-item active">Cart</li>
      {order.map((item, index) => (
        <BasketItem key={index} removeFromOrder={removeFromOrder} {...item} />
      ))}
      <li className="list-group-item active">
        Total cost:{" "}
        {order.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)}{" "}
        UAH.
      </li>
    </ul>
  );
};

export default BasketList;
