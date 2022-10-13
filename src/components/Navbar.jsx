import React from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography sx={{ display: { xs: "none", sm: "block" } }} variant="h6">
          Abdou
        </Typography>
        <Search color="primary">
          <InputBase placeholder="Search ..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ bgcolor: "red", width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          >
            A
          </Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ bgcolor: "red", width: 30, height: 30 }}>A</Avatar>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={(e) => setOpen(false)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;
