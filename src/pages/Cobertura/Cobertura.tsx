import React from "react";
import Typography from "@material-ui/core/Typography";
import CardProduto, { Produto } from "../Produto/CardProduto";
import { Grid } from "@material-ui/core";

const products: Produto[] = [
  { name: "Product 1", desc: "A nice thing", price: 9.99 },
  { name: "Product 2", desc: "Another thing", price: 3.45 },
  { name: "Product 3", desc: "Something else", price: 6.51 },
  { name: "Product 4", desc: "Best thing of all", price: 14.11 },
  { name: "Shipping", desc: "", price: 0 }
];

function Cobertura() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select what you want
      </Typography>
      <Grid container direction="row" spacing={1}>
        {products.map(product => (
          <React.Fragment key={product.name}>
            <Grid item xs={12} sm={6} xl={12} >
              <CardProduto
                name={product.name}
                price={product.price}
                desc={product.desc}
                key={product.name}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
}
export default Cobertura;
