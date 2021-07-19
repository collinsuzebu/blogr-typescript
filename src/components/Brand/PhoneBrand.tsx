import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

interface PhoneBrandProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: "#FFF",
    alignItems: "center",
    marginBottom: "3em",
    height: 700,
    backgroundColor: "#2c2d3f",
    borderBottomLeftRadius: "7.5em",
    borderTopRightRadius: "7.5em",
    backgroundImage: `url("/images/bg-pattern-circles.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% -150%",
    backgroundSize: "160%",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      backgroundPosition: "-55% 85%",
      backgroundSize: "70%",
      marginBottom: "3em",
      height: 320,
    },
  },

  h1: {
    fontWeight: 700,
    marginBottom: 20,
    letterSpacing: "1px",
  },
  p: {
    fontSize: "19.5px",
    lineHeight: "1.5em",
    fontWeight: 200,
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      fontSize: "13.5px",
    },
  },
  text: {
    textAlign: "center",
    position: "relative",
    padding: "0 45px",
    top: "-150px",
    [theme.breakpoints.up("md")]: {
      right: "5%",
      top: 0,
    },
  },

  illustration: {
    position: "relative",
    width: "100%",
    height: "auto",
    top: "-10em",
    marginBottom: "15px",
    transform: "scale(1.1)",
    [theme.breakpoints.up("md")]: {
      top: "19px",
      left: "-5%",
      transform: "scale(0.75)",
    },
  },
}));

const PhoneBrand: React.FC<PhoneBrandProps> = ({}) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              className={classes.illustration}
              src="/images/illustration-phones.svg"
              alt="Illustration Phones"
            />
          </Grid>
          <Grid item xs={12} md={5} className={classes.text}>
            <Typography className={classes.h1} variant="h5">
              State of the Art Infrastructure
            </Typography>
            <Typography className={classes.p}>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PhoneBrand;
