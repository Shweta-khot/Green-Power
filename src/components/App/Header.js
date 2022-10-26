/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

import React, { useState } from "react";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  CircleNotificationsRounded as CircleNotificationsRoundedIcon,
  Lens as LensIcon,
} from "@mui/icons-material";

import navConstants from "../../_shared/config/nav.config";
import storageService from "../../_shared/services/storage.service";

import userDefault from "../../assets/images/userDefault.jpg";

const pages = navConstants.navPrimaryOptions;

const Header = () => {
  const [active, setActive] = useState(
    storageService.getItem("active", "sessionStorage")
      ? storageService.getItem("active", "sessionStorage")
      : 0
  );

  const handleRoute = (page, index) => {
    console.log(page);
    setActive(index);
    storageService.setItem("active", index, "sessionStorage");

    window.location.href = page.path;
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{ background: "transparent", m: "0px", overflowX: "auto" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LensIcon
              fontSize="large"
              sx={{ mr: 1, display: "flex", color: "grey.main" }}
            />
            <Typography
              variant="largestBold"
              component="a"
              onClick={() => {
                window.location.href = "/";
                storageService.setItem("active", 0, "sessionStorage");
              }}
              href=""
              sx={{
                mr: 2,
                fontFamily: "Poppins",
                fontStyle: "normal",
                color: "#333B4E",
                textDecoration: "none",
              }}
            >
              Carbon Bell
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ mr: 2 }}
            />
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {pages.map((page, index) => (
                <Button
                  key={page.name}
                  onClick={() => handleRoute(page, index)}
                >
                  <Typography
                    noWrap
                    variant="mediumRegular"
                    sx={{
                      mr: 1,
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      color: active === index ? "blue.dark" : "#333B4E",
                      textTransform: "capitalize",
                    }}
                  >
                    {page.name}
                  </Typography>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Tooltip title="Open profile">
                <IconButton size="large" sx={{ color: "#cccccc", m1: 2 }}>
                  {/* <AccountCircleRoundedIcon /> */}
                  <Avatar src={userDefault}></Avatar>
                </IconButton>
              </Tooltip>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ m1: 2 }}
              />
              <Tooltip title="Check notifications">
                <IconButton size="large" sx={{ color: "#cccccc" }}>
                  <Badge badgeContent={5} color="warning">
                    <CircleNotificationsRoundedIcon fontSize="large" />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Header;
