import React, { useState, useRef } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { CompanySubMenu, ConnectSubMenu, ProductSubMenu } from "./SubMenus";
import Typography from "@material-ui/core/Typography";
import { useMobileDevice, useOnClickOutside } from "../../utils";
import ColorButton from "../Common/ColorButton";
import Logo from "../Common/Logo";

export interface StyleProps {
  show: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    padding: "0 40px",
  },

  menuItem: {
    position: "relative",
    margin: "5px",
  },
  menuTitle: {
    margin: 0,
    color: "#FFF",
    textTransform: "capitalize",
    padding: "8px 25px 8px 10px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",

    "&::after": {
      content: "url('/images/icon-arrow-light.svg')",
      marginLeft: theme.spacing(2),
    },
  },

  subMenu: {
    transition: "ease 0.4s",
    position: "absolute",
    width: "150px",
    backgroundColor: "#FFF",
    borderRadius: "4px",
    boxSizing: "border-box",
    boxShadow: ({ show }) => (show ? "0 0 10px #666" : ""),
    lineHeight: ({ show }) => (show ? 1 : 0),
    margin: ({ show }) => (show ? "10px 0 0 -20px" : 0),
    opacity: ({ show }) => (show ? 1 : 0),
    zIndex: 2,
  },

  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobileDevice = useMobileDevice();
  const [selected, setSelected] = useState("");

  const classes = useStyles({ show: !isMobileDevice });

  const handleClickOutside = () => setSelected("");

  useOnClickOutside(ref, handleClickOutside);

  const toggleMenuItem = (name: string) => {
    setSelected((state) => (name === state ? "" : name));
  };

  return (
    <Box className={classes.root}>
      <header className={classes.header} ref={ref}>
        <Logo />
        <Box className={classes.menuItem}>
          <Typography
            className={classes.menuTitle}
            onMouseOver={() => toggleMenuItem("product")}
          >
            Product
          </Typography>
          <Box className={classes.subMenu}>
            <ProductSubMenu show={selected === "product"} />
          </Box>
        </Box>
        <Box className={classes.menuItem}>
          <Typography
            className={classes.menuTitle}
            onMouseOver={() => toggleMenuItem("company")}
          >
            Company
          </Typography>
          <Box className={classes.subMenu}>
            <CompanySubMenu show={selected === "company"} />
          </Box>
        </Box>
        <Box className={classes.menuItem}>
          <Typography
            className={classes.menuTitle}
            onMouseOver={() => toggleMenuItem("connect")}
          >
            Connect
          </Typography>
          <Box className={classes.subMenu}>
            <ConnectSubMenu show={selected === "connect"} />
          </Box>
        </Box>
        <Box className={classes.buttonWrapper}>
          <ColorButton
            color="#FFF"
            bgColor="transparent"
            hoverColor="#FBFBFB"
            hoverbgColor="transparent"
            disableElevation
          >
            Login
          </ColorButton>
          <ColorButton
            variant="contained"
            color="#FF6662"
            bgColor="#FFF"
            hoverColor="#FEFEFE"
            hoverbgColor="#FF6662"
            disableElevation
          >
            Sign Up
          </ColorButton>
        </Box>
      </header>
    </Box>
  );
};

export default NavBar;
