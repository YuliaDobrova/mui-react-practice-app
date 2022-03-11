import { Grid } from "@mui/material";
import React from "react";

import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const { goods, setOrder } = props;

  return (
    // <div className='goods-list col-md-8'>
    // <div className='row'>
    <Grid
      container
      //   direction="row"
      //   justifyContent="center"
      //   alignItems="center"
      spacing={2}
      sx={{ mb: 5 }}
    >
      {goods.map((item) => (
        <GoodsItem key={item.id} setOrder={setOrder} {...item} />
      ))}
    </Grid>
    // </div>
    // </div>
  );
};

export default GoodsList;
