import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PersonalInfo from "../personalInfo/personalInfo";
import ReviewOrder from "../reviewOrder/reviewOrder";
import Products, { ProductDTO } from "../products/products";
import Payment from "../payment/payment";
import { GetStaticProps } from "next";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [
  "Personal information",
  "Products",
  "Payment details",
  "Review your order",
];

const Quotation = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [price, setPrice] = useState(0);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return (
          <Products products={products} onChange={handleChange} price={price} />
        );
      case 2:
        return <Payment />;
      case 3:
        return <ReviewOrder />;
      default:
        throw new Error("Unknown step");
    }
  };

  const handleChange = (selectedProduct: ProductDTO): any => {
    const newProducts = products.slice();
    const index = newProducts.indexOf(selectedProduct);
    if (-1 === index) {
      console.log("Não encontrado");
      return;
    }
    selectedProduct.selected = !selectedProduct.selected;
    newProducts.splice(index, 1, selectedProduct);
    const price = calculatePriceOfSelected();
    setProducts(newProducts);
    setPrice(price);
  };

  const calculatePriceOfSelected = (): number => {
    let total = 0;
    const selectedList = products.filter((pdt: ProductDTO) => pdt.selected);

    if (selectedList && selectedList.length > 0) {
      total = selectedList
        .map((product: ProductDTO) => product.price)
        .reduce((pdt1: number, pdt2: number) => pdt1 + pdt2);
    }
    return parseFloat(total.toFixed(2));
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Life insurance quote
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      company: 'Company name'
    },
    revalidate: 5
  };
};
export default Quotation;