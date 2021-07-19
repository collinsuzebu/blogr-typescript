import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "../Common/Image";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import HomeIcon from "@material-ui/icons/Home";

interface contactProps {}

const useStyles = makeStyles((theme) => ({
  main: {
    color: "white",
    backgroundColor: "#2c2d3f",
    backgroundImage: `url("/images/bg-pattern-circles.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "39% 45%",
    backgroundSize: "450%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "28% 51%",
      backgroundSize: "235%",
      paddingTop: "5em",
    },
  },
  name: {
    fontWeight: "bold",
    padding: "0 5px",
  },
  text: {
    "& div": {
      paddingBottom: "10px",
    },
    "& div>p": {
      display: "block",
      fontSize: "2.4em",
      [theme.breakpoints.up("md")]: {
        display: "inline",
      },
    },
  },

  p: {
    padding: "0 2em",
  },

  contact: {
    "& svg": {
      margin: "15px",
      cursor: "pointer",
      fontSize: 32,

      "&:hover": {
        color: "black",
      },
    },
  },
}));

const Contact: React.FC<contactProps> = ({}) => {
  const classes = useStyles();

  return (
    <Box height="100vh" display="flex">
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        direction="column"
        className={classes.main}
      >
        <Grid sm={12} md={4} item>
          <Image />
        </Grid>
        <Grid sm={12} md={4} item className={classes.text}>
          <Box>
            <Typography className={classes.name}>Collins</Typography>
            <Typography style={{ fontWeight: 1 }}>Uzebu</Typography>
          </Box>

          <Typography className={classes.p}>
            I'm Collins Uzebu. I currently work as a Software Engineer. As an
            Engineer, I am interested in embedded system applications and web
            technologies.
          </Typography>
        </Grid>
        <Grid sm={12} md={4} item>
          <Box display="flex" className={classes.contact}>
            <Link href="/">
              <HomeIcon />
            </Link>
            <Link href="https://collinsuzebu.com/">
              <LanguageIcon />
            </Link>
            <Link href="https://github.com/collinsuzebu/">
              <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/collinsuz/">
              <LinkedInIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
