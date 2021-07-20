import React from "react";
import Box from "@material-ui/core/Box";
import { ProductListMenu, CompanyListMenu, ConnectListMenu } from "./MenuList";
import { useMobileDevice } from "../../../utils";
import MenuButton from "./MenuButton";
import MenuButtonMobile from "./MenuButtonMobile";

interface CustomMenuProps {}

const CustomMenu: React.FC<CustomMenuProps> = ({}) => {
  const ismobile = useMobileDevice();

  return ismobile ? (
    <Box>
      <MenuButtonMobile name="Product" items={ProductListMenu} />
      <MenuButtonMobile name="Company" items={CompanyListMenu} />
      <MenuButtonMobile name="Connect" items={ConnectListMenu} />
    </Box>
  ) : (
    <Box>
      <MenuButton name="Product" items={ProductListMenu} />
      <MenuButton name="Company" items={CompanyListMenu} />
      <MenuButton name="Connect" items={ConnectListMenu} />
    </Box>
  );
};

export default CustomMenu;
