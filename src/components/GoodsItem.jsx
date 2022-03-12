import {
  Button,
  Card,
  CardActionArea,
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
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={poster}
            title={name}
            alt={name}
            height="140"
          />
          <CardContent>
            <Typography variant="h6" component="h3">
              {name}
            </Typography>
            <Typography variant="h6">Price: {price} UAH</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            // variant="outlined"
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
    </Grid>
  );
};

export default GoodsItem;
