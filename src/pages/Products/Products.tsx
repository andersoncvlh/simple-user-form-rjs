import React from "react";
import Typography from "@material-ui/core/Typography";
import ProductCard, { ProductDTO } from "./ProductCard";
import { Grid } from "@material-ui/core";

class Products extends React.Component<any, { products: ProductDTO[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [
        {
          name: "Product 1",
          desc: "A nice thing",
          price: 9.99,
          selected: false
        },
        {
          name: "Product 2",
          desc: "Another thing",
          price: 3.45,
          selected: false
        },
        {
          name: "Product 3",
          desc: "Something else",
          price: 6.51,
          selected: false
        },
        {
          name: "Product 4",
          desc: "Best thing of all",
          price: 14.11,
          selected: false
        },
        { name: "Shipping", desc: "", price: 0, selected: false }
      ]
    };
  }

  handleChange(selectedProduct: ProductDTO) {
    const newProducts = this.state.products.slice();
    const index = newProducts.indexOf(selectedProduct);
    if (-1 === index) {
      console.log("Não encontrado");
      return;
    }
    selectedProduct.selected = !selectedProduct.selected;
    newProducts.splice(index, 1, selectedProduct);
    this.setState({
      products: newProducts
    });
  }

  getSelectedProductsCount() {
    const selectedList = this.state.products.filter(pdt => pdt.selected);
    return selectedList.length < 1 ? "" : selectedList.length;
  }

  calculatePriceOfSelected(): number {
    let total = 0;
    const selectedList = this.state.products.filter(pdt => pdt.selected);

    if (selectedList && selectedList.length > 0) {
      total = selectedList
        .map(product => product.price)
        .reduce((pdt1, pdt2) => pdt1 + pdt2);
    }
    return parseFloat(total.toFixed(2));
  }

  productCardContent(product: any) {
    return (
      <Grid item xs={12} sm={6} xl={12}>
        <ProductCard
          product={product}
          key={product.name}
          onChange={() => this.handleChange(product)}
        />
      </Grid>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Select what you want 
        </Typography>
        <Typography component="p" gutterBottom>
          Estimated expense: R$ {this.calculatePriceOfSelected()}
        </Typography>
        <Grid container direction="row" spacing={1}>
          {this.state.products.map(product => (
            <React.Fragment key={product.name}>
              {this.productCardContent(product)}
            </React.Fragment>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}
export default Products;
