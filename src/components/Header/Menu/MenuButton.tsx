import React from "react";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import { useMobileDevice } from "../../../utils";

interface Items {
  id: number;
  name: string;
  href: string;
}

interface MenuButtonProps {
  name: string;
  items: Items[];
}

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
    color: "#FFF",
    textTransform: "capitalize",
    padding: "8px 25px 8px 10px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "transparent",
    },

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

const MenuButton: React.FC<MenuButtonProps> = ({ name, items }) => {
  const ismobile = useMobileDevice();

  const classes = useStyles({ show: !ismobile });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        className={classes.menuTitle}
        onMouseOver={handleMouseEnter}
      >
        {name}
      </Button>
      <Menu
        id="menu"
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        TransitionComponent={Grow}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        MenuListProps={{ onMouseLeave: handleClose }}
        PaperProps={{
          style: {
            width: 150,
          },
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;
