import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { useMobileDevice } from "../../utils";

interface LaptopBrandProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingTop: theme.spacing(28),
      paddingBottom: theme.spacing(8),
    },
  },

  h1: {
    fontWeight: 700,
    marginBottom: 20,
    lineHeight: 1.2,
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },

  p: {
    fontWeight: 200,
    fontSize: "13.5px",
    lineHeight: "1.7em",
    marginBottom: "2rem",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },

  illustration: {
    position: "relative",
    width: "100%",
    height: "auto",
    transform: "scale(1.1)",
    [theme.breakpoints.up("md")]: {
      left: "-30%",
      transform: "scale(1.5)",
    },
  },

  pContainer: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },

  text: {
    textAlign: "center",
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),

    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(24),
    },
  },
}));

const LaptopBrand: React.FC<LaptopBrandProps> = ({}) => {
  const isMobileDevice = useMobileDevice();

  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6}>
            {isMobileDevice ? (
              <img
                src="/images/illustration-laptop-mobile.svg"
                alt="Laptop"
                className={classes.illustration}
              />
            ) : (
              <img
                src="/images/illustration-laptop-desktop.svg"
                alt="Laptop"
                className={classes.illustration}
              />
            )}
          </Grid>
          <Grid item md={6} className={classes.text}>
            <Typography className={classes.h1} variant="h5">
              Free, open, simple
            </Typography>
            <Container className={classes.pContainer}>
              <Typography className={classes.p} style={{ marginBottom: "5em" }}>
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </Typography>
            </Container>

            <Typography className={classes.h1} variant="h5">
              Powerful tooling
            </Typography>

            <Container className={classes.pContainer}>
              <Typography className={classes.p}>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LaptopBrand;
