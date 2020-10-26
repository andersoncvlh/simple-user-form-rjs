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
  }
});

function CardProduto(props: Produto) {

  const [state, setState] = React.useState({
    checkedProduto: false
  });

  const classes = useStyles();

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.selected = event.target.checked;
  };

  return (
    <Card className={classes.cardItem}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R$ { props.price } 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { props.desc } 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Switch
          checked={state.checkedProduto}
          onChange={handleChange}
          color="primary"
          name="checkedProduto"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </CardActions>
    </Card>
  );
}
export default CardProduto;

export class Produto {
  name!: string;
  desc!: string;
  price!: number;
  selected?: boolean;

  constructor(init: Partial<Produto>) {
    Object.assign(this, init);
  }
}
