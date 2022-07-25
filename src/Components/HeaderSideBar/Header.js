import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SideBar from "./MuiSidebar";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: white;
  justify-content: space-between;
  -webkit-box-shadow: -2px 6px 10px 3px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 6px 10px 3px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 6px 10px 3px rgba(0, 0, 0, 0.16);
`;

const BrandLogo = styled.img`
  width: 200px;
  margin-left: 20px;
  cursor: pointer;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header({ setHamburgerMenu, hamburgerMenu }) {
  const signOut = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  };

  return (
    <HeaderContainer>
      <IconsContainer>
        <SideBar />
        <a href="/dashboard/car-data">
          <BrandLogo src="/images/logo.png" />
        </a>
      </IconsContainer>
      {localStorage.getItem("loggedIn") && (
        <Button style={{ margin: "5px 10px 0 0 ", height: "50px" }} variant="outlined" onClick={() => signOut()}>
          Sign Out
        </Button>
      )}
    </HeaderContainer>
  );
}
