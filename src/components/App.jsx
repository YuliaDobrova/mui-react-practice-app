import { useState } from "react";
import { Container } from "@mui/material";

import { goods } from "../data/goods";
import GoodsList from "./GoodsList";
import Search from "./Search";
import Header from "./Header";
import { Basket } from "./Basket";
// import BasketList from "./BasketList";   более не используется
// import Snack from "./Snack";

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [isSnackOpen, setIsSnackOpen] = useState(false);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch("");
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    // handleClick();
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  // function handleClick() {
  //   setIsSnackOpen(true);
  // }

  // function handleClose(event, reason) {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setIsSnackOpen(false);
  // }

  return (
    <>
      <Header
        handleCart={() => {
          setIsCartOpen(true);
        }}
        orderLength={order.length}
      />
      <Container
        sx={{
          mt: "1rem",
        }}
      >
        <Search value={search} onChange={handleChange} />
        <GoodsList goods={products} setOrder={addToOrder} />
        {/* <BasketList order={order} removeFromOrder={removeFromOrder} /> */}
      </Container>
      <Basket
        order={order}
        isCartOpen={isCartOpen}
        removeFromOrder={removeFromOrder}
        closeCart={() => {
          setIsCartOpen(false);
        }}
      />
      {/* <Snack isSnackOpen={isSnackOpen} handleClose={handleClose} /> */}
    </>
  );
};

export default App;
