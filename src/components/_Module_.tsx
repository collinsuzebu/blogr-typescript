import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ColorButton from "./ColorButton";

interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  appbar: {
    color: "#FFF",
    width: "100%",
    borderBottomLeftRadius: "7.5em",
    backgroundImage: `url("/images/bg-pattern-intro.svg"), linear-gradient(hsl(12,100%,70%),hsl(354,100%,62%))`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "39% 45%",
    backgroundSize: "450%",
    minHeight: 572,

    [theme.breakpoints.up("md")]: {
      backgroundImage: `url("/images/bg-pattern-intro.svg"), linear-gradient(hsl(12,100%,72%),hsl(354,100%,62%))`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "28% 51%",
      backgroundSize: "235%",
    },
  },
  toolbar: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(4),
  },
  header: {
    textAlign: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(6),
    },
  },

  title: {
    fontSize: "2em",
    padding: "0 50px",
  },

  subtitle: {
    fontWeight: 300,
    fontSize: "1.2em",
    padding: "0 55px",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5em",
    },
  },
  icon: {
    height: 40,
    width: 100,
  },
}));

const Header: React.FC<HeaderProps> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <Grid item>
              <Box display="flex" alignItems="center">
                <Icon className={classes.icon}>
                  <img src="/images/logo.svg" />
                </Icon>
              </Box>
            </Grid>

            <Grid component={Box}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Box>
                  <Button color="inherit">Product</Button>
                  <Button color="inherit">Company</Button>
                  <Button color="inherit">Connect</Button>
                </Box>
                <Box>
                  <Button color="inherit">Login</Button>
                  <ColorButton
                    variant="contained"
                    color="#FF6662"
                    bgColor="#FFF"
                    hoverColor="#FF8F70"
                    disableElevation
                  >
                    Sign Up
                  </ColorButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
        {/* ------------------ */}

        <Grid container direction="row">
          <Grid item md={12} className={classes.header}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              A modern publishing platform
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              Grow your audience and build your online brand
            </Typography>
          </Grid>
        </Grid>

        {/* ------------------ */}

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={{ paddingBottom: 40 }}>
            <ColorButton
              variant="contained"
              color="#FF6662"
              bgColor="#FFF"
              hoverColor="#FF8F70"
              disableElevation
            >
              Start for Free
            </ColorButton>
            <ColorButton
              variant="outlined"
              color="#FFF"
              hoverColor="#FFF"
              bgColor="#FF6662"
              disableElevation
            >
              Learn More
            </ColorButton>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Header;
