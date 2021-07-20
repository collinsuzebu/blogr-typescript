import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useMobileDevice } from "../../../utils";

export interface StyleProps {
  show: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
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

interface Items {
  id: number;
  name: string;
  href: string;
}

interface MenuButtonMobileProps {
  name: string;
  items: Items[];
}

const MenuButtonMobile: React.FC<MenuButtonMobileProps> = ({ name, items }) => {
  const ismobile = useMobileDevice();
  const classes = useStyles({ show: ismobile });

  const [selected, setSelected] = useState("");

  const toggleMenuItem = (name: string) => {
    setSelected((state) => (name === state ? "" : name));
  };

  return (
    <Box className={classes.menuItem}>
      <Typography
        className={classes.menuTitle}
        onClick={() => toggleMenuItem(name)}
      >
        {name}
      </Typography>
      {selected === name && (
        <Box display="flex" flexDirection="column">
          {items.map((item) => (
            <Link key={item.id} className={classes.link} href="#">
              {item.name}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuButtonMobile;
