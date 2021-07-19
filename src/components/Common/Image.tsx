import React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

interface imageProps {}

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    height: "100%",
  },
}));

const Image: React.FC<imageProps> = ({}) => {
  const classes = useStyles();

  return (
    <Icon>
      <img
        className={classes.image}
        src="/images/profile.svg"
        alt="Collins Uzebu Avatar"
      ></img>
    </Icon>
  );
};

export default Image;
