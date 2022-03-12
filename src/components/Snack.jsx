import React from "react";
import { Alert, Snackbar } from "@mui/material";

const Snack = (isSnackOpen, handleClose = Function.prototype) => {
  return (
    <Snackbar open={isSnackOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Products added to Cart</Alert>
    </Snackbar>
  );
};

export default Snack;
