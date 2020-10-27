import React from "react";
import Typography from "@material-ui/core/Typography";
import ProductCard, { ProductDTO } from "./ProductCard";
import { Grid } from "@material-ui/core";

const Products = (props: {
  products: ProductDTO[];
  onChange: (selectedProduct: ProductDTO) => any;
  price: number;
}) => {
  const productCardContent = (product: any) => {
    return (
      <Grid item xs={12} sm={6} xl={12}>
        <ProductCard
          product={product}
          key={product.name}
          onChange={() => props.onChange(product)}
        />
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select what you want
      </Typography>
      <Typography component="p" gutterBottom>
        Estimated expense: R$ {props.price}
      </Typography>
      <Grid container direction="row" spacing={1}>
        {props.products.map((product) => (
          <React.Fragment key={product.name}>
            {productCardContent(product)}
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
};
export default Products;
