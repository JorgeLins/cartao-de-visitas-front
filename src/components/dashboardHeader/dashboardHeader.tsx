import { useState } from "react";

import { CreateCard } from "../createCard/createCard";
import { PopUpLogout } from "../popLogout";
import { CreateNewUser } from "../createNewUser";

import {
  StyledTitle,
  StyledHeader,
  StyledCardButton,
  PlusButton,
  StyledDropdown,
  StyledDropdownToggle,
  StyledDropdownItem,
  StyledDropdownMenu,
  StyledButtonsDiv,
  HamburgerButton,
} from "./styles";
import { IcardUpdate } from "./types";
import { About } from "../about/about";
import { useMediaQuery } from "react-responsive";

export const DashboardHeader = ({
  getAllcards,
  searchOn,
  onClick,
  openHeader,
}: IcardUpdate) => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 640px)",
  });
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [hasLogout, setHasLogout] = useState<boolean>(false);
  const [hasUserClicked, setHasUserClicked] = useState<Boolean>(false);

  const [hasClickedAbout, setAboutHasClicked] = useState<Boolean>(false);
  const handleLogoutClicked = () => {
    console.log("clicou");
    setHasLogout(true);
  };
  const handleButtonSubmitClicked = () => {
    onClick && onClick();
    setHasUserClicked(false);
    setHasClicked(true);
  };
  const handleButtonCreateUserClicked = () => {
    setHasUserClicked(true);
    setHasClicked(false);
  };
  const handleButtonCreateUserClickedClose = () => setHasUserClicked(false);

  const handleCreateHasClicked = () => {
    console.log(openHeader);
    openHeader && openHeader();
    setHasClicked(false);
  };
  const handleHasLogoutClicked = () => setHasLogout(false);

  const handleAbout = () => setAboutHasClicked(true);
  const handleAboutClose = () => setAboutHasClicked(false);

  return (
    <StyledHeader>
      {isMobile && !searchOn && (
        <StyledTitle>{isMobile ? "inicio" : "Dashboard"}</StyledTitle>
      )}
      {!isMobile && (
        <StyledTitle>{isMobile ? "inicio" : "Dashboard"}</StyledTitle>
      )}

      <StyledButtonsDiv>
        <StyledCardButton type="button" onClick={handleButtonSubmitClicked}>
          <PlusButton color="#0088fa" size={16} /> Criar novo cartão virtual
        </StyledCardButton>
        <StyledCardButton type="button" onClick={handleButtonCreateUserClicked}>
          <PlusButton color="#0088fa" size={16} /> Criar novo usuário
        </StyledCardButton>
      </StyledButtonsDiv>

      {hasClicked && (
        <CreateCard
          getAllCards={getAllcards}
          onClick={handleCreateHasClicked}
        />
      )}
      {hasUserClicked && (
        <CreateNewUser onClick={handleButtonCreateUserClickedClose} />
      )}
      {hasClickedAbout && <About onClick={handleAboutClose}></About>}

      {isMobile && !searchOn && (
        <StyledDropdown>
          <StyledDropdownToggle id={isMobile ? "" : "dropdown-basic"}>
            {isMobile ? <HamburgerButton color="#888888" /> : "Menu"}
          </StyledDropdownToggle>
          <StyledDropdownMenu>
            <StyledDropdownItem onClick={handleAbout}>
              Sobre o Sistema
            </StyledDropdownItem>

            <StyledDropdownItem onClick={handleLogoutClicked}>
              Sair
            </StyledDropdownItem>
          </StyledDropdownMenu>
        </StyledDropdown>
      )}
      {!isMobile && (
        <StyledDropdown>
          <StyledDropdownToggle id={isMobile ? "" : "dropdown-basic"}>
            {isMobile ? <HamburgerButton color="#888888" /> : "Menu"}
          </StyledDropdownToggle>
          <StyledDropdownMenu>
            <StyledDropdownItem onClick={handleAbout}>
              Sobre o Sistema
            </StyledDropdownItem>

            <StyledDropdownItem onClick={handleLogoutClicked}>
              Sair
            </StyledDropdownItem>
          </StyledDropdownMenu>
        </StyledDropdown>
      )}

      {hasLogout && <PopUpLogout onClick={handleHasLogoutClicked} />}
    </StyledHeader>
  );
};
