import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import NavBarMobile from "./Mobile/NavBarMobile";
import ColorButton from "../Common/ColorButton";
import NavBar from "./NavBar";

interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  navbar: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(6),

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
    },
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
  container: {
    marginTop: "10px",
    position: "absolute",
    width: "80%",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  h1: {
    color: "white",
    fontSize: "2.1em",
    marginBottom: 0,

    [theme.breakpoints.up("md")]: {
      fontSize: "3.75em",
    },
  },

  p: {
    color: "white",
    fontSize: "1.1em",
    marginBottom: "50px",

    [theme.breakpoints.up("md")]: {
      fontSize: "1.25em",
    },
  },

  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Header: React.FC<HeaderProps> = ({}) => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} position="static" className={classes.appbar}>
      <Container className={classes.navbar}>
        <NavBar />
        <NavBarMobile />
      </Container>

      <Container className={classes.container}>
        <Typography className={classes.h1}>
          A modern publishing platform
        </Typography>
        <Typography className={classes.p}>
          Grow your audience and build your online brand
        </Typography>
        <Box className={classes.buttonWrapper}>
          <ColorButton
            variant="contained"
            color="#FF6662"
            bgColor="#FFF"
            style={{ flex: "0 0 auto" }}
            disableElevation
          >
            Start for Free
          </ColorButton>
          <ColorButton
            variant="outlined"
            color="#FFF"
            hoverColor="#FF6662"
            hoverbgColor="#FFF"
            bgColor="#FF6662"
            style={{ flex: "0 0 auto" }}
            disableElevation
          >
            Learn More
          </ColorButton>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
