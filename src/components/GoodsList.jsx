import { Grid } from "@mui/material";
import React from "react";

import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const { goods, setOrder } = props;

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 5 }}
    >
      {goods.map((item) => (
        <GoodsItem key={item.id} setOrder={setOrder} {...item} />
      ))}
    </Grid>
  );
};

export default GoodsList;
