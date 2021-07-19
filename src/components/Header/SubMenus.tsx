import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles, Theme } from "@material-ui/core/styles";

export interface StyleProps {
  show: boolean;
}

interface SubMenuProps {
  show: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  link: {
    textTransform: "capitalize",
    margin: ({ show }) => (show ? "4px" : theme.spacing(0)),
    padding: ({ show }) => (show ? "7px" : theme.spacing(0)),
    fontWeight: 400,
    color: "hsl(207, 13%, 34%)",
    transition: "margin ease 0.4s, padding ease 0.4s",
    textDecoration: "none",
    textAlign: "center",

    "&:hover": {
      fontWeight: 600,
      cursor: (props) => (props.show ? "pointer" : "default"),
    },
  },
}));

const ProductSubMenu: React.FC<SubMenuProps> = ({ show }) => {
  const classes = useStyles({ show });
  return (
    <Box display="flex" flexDirection="column">
      {show && (
        <>
          <Link className={classes.link} href="#overview">
            Overview
          </Link>
          <Link className={classes.link} href="#">
            Pricing
          </Link>
          <Link className={classes.link} href="#">
            Marketplace
          </Link>
          <Link className={classes.link} href="#features">
            Features
          </Link>
          <Link className={classes.link} href="#integrations">
            Integrations
          </Link>
        </>
      )}
    </Box>
  );
};

const CompanySubMenu: React.FC<SubMenuProps> = ({ show }) => {
  const classes = useStyles({ show });
  return (
    <Box display="flex" flexDirection="column">
      {show && (
        <>
          <Link
            className={classes.link}
            href="http://collinsuzebu.com"
            target="_blank"
          >
            About
          </Link>
          <Link className={classes.link} href="#">
            Team
          </Link>
          <Link className={classes.link} href="#">
            Blog
          </Link>
          <Link className={classes.link} href="#">
            Careers
          </Link>
        </>
      )}
    </Box>
  );
};

const ConnectSubMenu: React.FC<SubMenuProps> = ({ show }) => {
  const classes = useStyles({ show });
  return (
    <Box display="flex" flexDirection="column">
      {show && (
        <>
          <Link className={classes.link} href="/contact">
            Contact
          </Link>
          <Link className={classes.link} href="#">
            Newsletter
          </Link>
          <Link className={classes.link} href="#">
            LinkedIn
          </Link>
        </>
      )}
    </Box>
  );
};

export { ProductSubMenu, CompanySubMenu, ConnectSubMenu };
