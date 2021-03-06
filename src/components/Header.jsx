import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ShoppingBasket } from "@mui/icons-material";

const Header = ({ handleCart, orderLength }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          // for 4 version of Mui
          // style={{ flexGrow: 1 }}
        >
          MUI Shop App
        </Typography>
        <IconButton color="inherit" onClick={handleCart}>
          <Badge color="secondary" badgeContent={orderLength}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
