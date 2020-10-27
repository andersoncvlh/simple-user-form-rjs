import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Switch } from "@material-ui/core";

const useStyles = makeStyles({
  cardItem: {
    maxWidth: 400,
  },
});

const ProductCard = (props: {
  product: ProductDTO;
  onChange: (event: any) => any;
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardItem}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R$ {props.product.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.product.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Switch
          checked={props.product.selected}
          onChange={props.onChange}
          color="primary"
          name="checkedProduto"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </CardActions>
    </Card>
  );
};
export default ProductCard;

export class ProductDTO {
  name!: string;
  desc!: string;
  price!: number;
  selected?: boolean;

  constructor(init: Partial<ProductDTO>) {
    Object.assign(this, init);
  }
}
