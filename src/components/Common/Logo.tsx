import React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

interface LogoProps {}

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "100%",
    width: "auto",
    paddingRight: "8%",
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
    },
  },
}));

const Logo: React.FC<LogoProps> = ({}) => {
  const classes = useStyles();

  return (
    <Icon className={classes.logo}>
      <img src="/images/logo.svg" />
    </Icon>
  );
};

export default Logo;
