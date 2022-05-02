import { useState, ChangeEvent } from "react";
import Axios, { AxiosError } from "axios";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Expire from "../../components/expire/expire";
import Snackbar from '@mui/material/Snackbar';

import { LoginModal } from "../../components/loginModal/loginModal";
import {
  StyledButton,
  StyledDiv,
  StyledInput,
  StyledPSent,
  StyledImageGreen,
  HeaderDiv,
  StyledA,
  StyledAlert,
  StyledH1, StyledLogo, StyledLabel, StyledLinkText, StyledLogin, StyledLoginText, StyledImageBackground, MainDiv
} from "./styles";
import greenImage from "../../images/Verde.png";
import api from "../../services/api";
import { useMediaQuery } from "react-responsive";
import BackgroundImg from '../../images/GalaxyNote10.png'

export function RecoverPassword() {
  const [email, setEmail] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [open, setOpen] = useState(true);
  const [calledError, setCalledError] = useState<boolean>(false);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const text = "Não se preocupe";
  const secondText = " Vamos te ajudar a recuperar!";
  const isMobile = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  const recoverHandle = async () => {
    try {
      const response = await api.post("user/password/forgot", { email });
      if (response.status === 200) {
        setHasClicked(true)
      };
    }
    catch (error) {
      if (Axios.isAxiosError(error)) {
        setFeedback((error as AxiosError).response?.data.message);
        setCalledError(true)

      }
    }
  }

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setOpen(true)
  };

  return (
    <MainDiv>
      <StyledImageBackground src={BackgroundImg} alt="" />
      <StyledDiv>

        <HeaderDiv mobile={isMobile}>
          <StyledH1>Cartão Virtual Unifor</StyledH1>
          <StyledLoginText>{text}</StyledLoginText>
          <StyledLoginText>{secondText}</StyledLoginText>
        </HeaderDiv>
        <StyledLogin>
          <StyledInput
            value={email}
            onChange={handleChangeEmail}
            id="login"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </StyledLogin>
        <StyledButton
          className="sendButton"
          type="submit"
          onClick={recoverHandle}
        >
          Enviar
        </StyledButton >


        {calledError && (
          <Expire delay="5000">
            <Collapse in={open}>
              <StyledAlert
                variant="filled"
                severity="error"
                sx={{ mb: 2 }}
              >
                {feedback}

              </StyledAlert>
            </Collapse>
          </Expire>
        )
        }
        {hasClicked && (
          <StyledPSent className="sentText">
            <StyledImageGreen src={greenImage} alt="" />
            Verifique seu email.
          </StyledPSent>
        )}
      </StyledDiv>
    </MainDiv>
  );
}
