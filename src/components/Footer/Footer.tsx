import React from "react";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface FooterProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#25252D",
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    borderTopRightRadius: "7.5em",

    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    alignContent: "center",

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      marginTop: theme.spacing(26),
      paddingBottom: theme.spacing(8),
    },
  },
  icon: {
    height: "auto",
    width: 100,
    paddingBottom: theme.spacing(4),
  },
  title: {
    color: "#FFF",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  link: {
    "& a": {
      color: "#ababab",
      display: "block",
      marginBottom: theme.spacing(1),
      fontSize: ".96rem",
    },
  },
  container: {
    alignContent: "center",
    flexDirection: "column",
    marginTop: theme.spacing(4),
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      textAlign: "left",
    },
  },
}));

// style={{ backgroundColor: "pink" }}

const Footer: React.FC<FooterProps> = ({}) => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Grid container className={classes.container}>
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center">
              <Icon className={classes.icon}>
                <img src="/images/logo.svg" />
              </Icon>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography className={classes.title}>Product</Typography>
            <Box className={classes.link}>
              <Link href="#">Overview</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Marketplace</Link>
              <Link href="#">Features</Link>
              <Link href="#">Integrations</Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography className={classes.title}>Company</Typography>
            <Box className={classes.link}>
              <Link href="https://collinsuzebu.com">About</Link>
              <Link href="#">Team</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Careers</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classes.title}>Connect</Typography>
            <Box className={classes.link}>
              <Link href="#">Contact</Link>
              <Link href="#">Newsletter</Link>
              <Link href="https://www.linkedin.com/in/collinsuz">LinkedIn</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
