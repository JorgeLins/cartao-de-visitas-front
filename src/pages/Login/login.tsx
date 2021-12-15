/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import {
  StyledImageBackground,
  MainDiv,

  StyledLogo,
} from "./styles";
import { About } from "../../components/./about/about"
import BackgroundImg from '../../images/GalaxyNote10.png'
import { LoginModal } from "../../components/loginModal/loginModal";
import { useMediaQuery } from "react-responsive";


export function Login() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 600px)",
  });

  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const handleButtonSubmitClicked = () => setHasClicked(true);
  const handleAboutClicked = () => setHasClicked(false);
  return (
    <MainDiv>
      {hasClicked && <About onClick={handleAboutClicked} />}
      <StyledLogo mobile={isMobile} onClick={handleButtonSubmitClicked} />
      <StyledImageBackground src={BackgroundImg} alt="" />
      <LoginModal
        text="Seja bem-vindo(a)!"
        secondText="Faça o login para continuar."
      />

    </MainDiv>
  );
}
