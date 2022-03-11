import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const GoodsItem = (props) => {
  const { name, price, setOrder, poster } = props;

  return (
    // <div className="col-12 col-md-6 px-md-2">
    <Grid
      item
      xs={12}
      md={4}
      // sx={{ border: "1px solid blue" }}
    >
      {/* <div className="card"> */}
      <Card sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          image={poster}
          title={name}
          alt={name}
          height="140"
        />
        <CardContent>
          {/* <h5 className="card-title">{name}</h5> */}
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          {/* <p className="card-text">Цена: {price} руб.</p> */}
          <Typography variant="h6">Price: {price} UAH</Typography>
        </CardContent>
        <CardActions>
          <Button
            // variant="contained"
            variant="outlined"
            // variant="text"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Buy
          </Button>
        </CardActions>
      </Card>
      {/* </div> */}
    </Grid>
    // </div>
  );
};

export default GoodsItem;
