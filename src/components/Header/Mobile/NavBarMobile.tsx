import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Theme } from "@material-ui/core";
import Logo from "../../Common/Logo";
import MobileMenu from "./MobileMenu";

export interface StyleProps {
  showMenu: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  menuButton: {
    width: "35px",
    height: "35px",
    background: ({ showMenu }) =>
      `url(${
        !showMenu ? "/images/icon-hamburger.svg" : "/images/icon-close.svg"
      }) no-repeat center`,
    backgroundSize: "100%",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
}));

interface NavBarMobileProps {}

const NavBarMobile: React.FC<NavBarMobileProps> = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  const classes = useStyles({ showMenu });

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Logo />
        <Button
          className={classes.menuButton}
          onClick={() => setShowMenu(!showMenu)}
        />
      </header>
      {showMenu && <MobileMenu />}
    </div>
  );
};

export default NavBarMobile;
