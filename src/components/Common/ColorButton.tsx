import React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { Omit } from "@material-ui/types";

const styles = createStyles({
  root: {
    margin: "0 1em",
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",

    color: (props: ColorButtonProps) => props.color,
    background: ({ background }: ColorButtonProps) =>
      background ? background : "none",
    backgroundColor: ({ bgColor }: ColorButtonProps) =>
      bgColor ? bgColor : "transparent",
    border: ({ hoverbgColor }: ColorButtonProps) =>
      hoverbgColor ? `2px solid ${hoverbgColor}` : `none`,

    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
      color: ({ hoverColor }: ColorButtonProps) => hoverColor,
      backgroundColor: ({ hoverbgColor }: ColorButtonProps) =>
        hoverbgColor ? hoverbgColor : "#FFF",
    },
  },
});

interface ColorButtonProps {
  color: string;
  bgColor?: string;
  hoverColor?: string;
  hoverbgColor?: string;
  background?: string;
}

function ColorButtonrRaw(
  props: WithStyles<typeof styles> &
    Omit<ButtonProps, keyof ColorButtonProps> &
    ColorButtonProps,
) {
  const {
    classes,
    color,
    bgColor,
    hoverColor,
    hoverbgColor,
    background,
    ...other
  } = props;
  return <Button className={classes.root} {...other} />;
}

const ColorButton = withStyles(styles)(ColorButtonrRaw);

export default ColorButton;
