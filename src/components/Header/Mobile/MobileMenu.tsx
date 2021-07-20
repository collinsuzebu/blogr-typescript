import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Line from "../../Common/Line";
import ColorButton from "../../Common/ColorButton";
import Menu from "../Menu/Menu";

const useStyles = makeStyles(() => ({
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
}));

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = ({}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.modal}>
        <Menu />
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
