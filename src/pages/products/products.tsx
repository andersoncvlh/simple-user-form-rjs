import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { GetStaticProps, NextPage } from "next";

const useStyles = makeStyles({
  cardItem: {
    maxWidth: 400,
  },
});

const Products: NextPage<ProductStaticProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select what you want
      </Typography>
      <Typography component="p" gutterBottom>
        Estimated expense: R$ {props.price}
      </Typography>
      <Grid container direction="row" spacing={1}>
        {props.products.map((product: ProductDTO) => (
          <React.Fragment key={product.name}>
            <Grid item xs={12} sm={6} xl={12}>
              <Card className={classes.cardItem}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      R$ {product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Switch
                    checked={product.selected}
                    onChange={props.onChange}
                    color="primary"
                    name="checkedProduto"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </CardActions>
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:8181/api/v1/products");
  const data = await response.json();
  console.log('Teste');
  return {
    props: {
      products: data.products,
    },
    revalidate: 5
  };
};
export default Products;

export class ProductStaticProps {
  products!: ProductDTO[];
  onChange!: (event: any) => any;
  price!: number;
}

export class ProductDTO {
  name!: string;
  desc!: string;
  selected?: boolean;
  price!: number;
}
