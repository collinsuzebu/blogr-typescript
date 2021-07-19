import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, Typography } from "@material-ui/core";
import { ProductSubMenu, CompanySubMenu, ConnectSubMenu } from "../SubMenus";
import Line from "../../Common/Line";
import ColorButton from "../../Common/ColorButton";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },

  modal: {
    position: "absolute",
    width: "80%",

    marginTop: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#FFF",
    borderRadius: "8px",

    boxShadow:
      "-10px 10px 30px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px 5px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "22px",
    zIndex: 2,
  },

  menuItem: {
    padding: "10px",
    margin: "4px 0",
    width: "100%",
    textAlign: "center",
  },

  menuTitle: {
    position: "relative",
    color: "hsl(207, 13%, 34%)",
    margin: 0,
    padding: 0,
    fontSize: "18px",

    "&::after": {
      content: "url('/images/icon-arrow-dark.svg')",
      marginLeft: theme.spacing(1),
    },
  },
}));

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = ({}) => {
  const classes = useStyles();

  const [selected, setSelected] = useState("");

  const toggleMenuItem = (name: string) => {
    setSelected((state) => (name === state ? "" : name));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.modal}>
        <Box className={classes.menuItem}>
          <Typography
            className={classes.menuTitle}
            onClick={() => toggleMenuItem("product")}
          >
            Product
          </Typography>
          <ProductSubMenu show={selected === "product"} />
        </Box>
        <Box className={classes.menuItem}>
          <Typography
            className={classes.menuTitle}
            onClick={() => toggleMenuItem("company")}
          >
            Company
          </Typography>
          <CompanySubMenu show={selected === "company"} />
        </Box>
        <Box className={classes.menuItem}>
          <Typography
            className={classes.menuTitle}
            onClick={() => toggleMenuItem("connect")}
          >
            Connect
          </Typography>
          <ConnectSubMenu show={selected === "connect"} />
        </Box>
        <Line margin={20} />
        <ColorButton
          variant="contained"
          aria-label="login"
          color="#4b5862"
          bgColor="transparent"
          hoverColor="#728fa7"
          disableElevation
        >
          Login
        </ColorButton>
        <ColorButton
          variant="contained"
          aria-label="signup"
          color="#FFF"
          bgColor="#ff525d"
          hoverColor="#EFEFEF"
          background="linear-gradient(90deg, #ff8f70 0%, #ff3d54 100%)"
          disableElevation
        >
          Sign Up
        </ColorButton>
      </Box>
    </Box>
  );
};

export default MobileMenu;
