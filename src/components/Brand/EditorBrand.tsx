import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useMobileDevice } from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(8),
    },
  },
  grid: {
    [theme.breakpoints.up("md")]: {
      order: 2,
      // display: "flex",
      // justifyContent: "center",
    },
  },
  gridContent: {
    textAlign: "center",
    marginBottom: theme.spacing(32),
    padding: `0 45px`,
    [theme.breakpoints.up("md")]: {
      order: 1,
      paddingRight: theme.spacing(5),
      marginBottom: theme.spacing(24),
    },
  },
  ctaContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
  titleContainer: {
    fontWeight: 700,
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(16),
    textAlign: "center",
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
    top: "-22%",
    transform: "scale(1.1)",
    [theme.breakpoints.up("md")]: {
      top: "-22%",
      left: "30%",
      bottom: "-59px",
      transform: "scale(1.5)",
    },
  },

  title: {
    fontSize: "1.8em",
    fontWeight: 500,
    lineHeight: 1.8,
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5em",
    },
  },
  text: {
    textAlign: "center",
  },
}));

interface BrandProps {}

const Brand: React.FC<BrandProps> = ({}) => {
  const classes = useStyles();
  const isMobileDevice = useMobileDevice();

  return (
    <section className={classes.root}>
      <Container>
        <Grid container justifyContent="center">
          <Container className={classes.titleContainer}>
            <Typography className={classes.title}>
              Designed for the future
            </Typography>
          </Container>
          <Grid className={classes.grid} item md={6}>
            {isMobileDevice ? (
              <img
                className={classes.illustration}
                src="/images/illustration-editor-mobile.svg"
                alt="Illustration Editor Desktop"
              />
            ) : (
              <img
                className={classes.illustration}
                src="/images/illustration-editor-desktop.svg"
                alt="Illustration Editor Desktop"
              />
            )}
          </Grid>

          <Grid className={classes.gridContent} item md={6}>
            <Typography className={classes.h1} variant="h5">
              Introducing an extensible editor
            </Typography>
            <Container className={classes.ctaContainer}>
              <Typography className={classes.p}>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </Typography>
            </Container>

            <Typography className={classes.h1} variant="h5">
              Robust Content Management
            </Typography>
            <Container className={classes.ctaContainer}>
              <Typography className={classes.p} align="center">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Brand;
