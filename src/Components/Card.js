import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
  type: {
    color: "#00dbd0",
  },
  bton: {
    paddingLeft: 130,
    paddingRight: 110,
    color: "#374b5c",
  },
});

export default function MediaCard({ image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.type}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Blog Post One
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.bton} size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
