import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import BasketItem from "./BasketItem";

export const Basket = (props) => {
  const {
    isCartOpen,
    order = [],
    removeFromOrder,
    closeCart = Function.prototype,
  } = props;
  return (
    <Drawer anchor="right" open={isCartOpen} onClose={closeCart}>
      <List sx={{ width: "300px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
      </List>
      <Divider />
      {!order.length ? (
        <ListItem>Cart is empty!</ListItem>
      ) : (
        <>
          {order.map((item) => (
            <BasketItem
              key={item.name}
              {...item}
              removeFromOrder={removeFromOrder}
            />
          ))}
          <Divider />
          <ListItem>
            <Typography sx={{ fontWeight: 700 }}>
              Total cost:{" "}
              {order.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)}{" "}
              UAH.
            </Typography>
          </ListItem>
        </>
      )}
    </Drawer>
  );
};
