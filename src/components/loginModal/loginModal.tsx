import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Checkbox from '@mui/material/Checkbox';
import axios, { AxiosError } from "axios";
import { Terms } from "../terms";
import Collapse from '@mui/material/Collapse';
import Expire from "../../components/expire/expire";


import { Texts } from "./types";
import {
  HeaderDiv,
  StyledLoginText,
  StyledH1,
  StyledInput,
  StyledLabel,
  StyledLogin,
  StyledButton,
  StyledDiv,
  StyledLinkText,
  StyledA,
  CheckboxContainer,
  Styledtext,
  StyledAlert,
  StyledSnackbar

} from "./styles";
import api from "../../services/api";
import { useHistory } from "react-router";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';



export const LoginModal = ({ text, secondText }: Texts) => {
  const history = useHistory();

  const isMobile = useMediaQuery({
    query: "(max-device-width: 640px)",
  });


  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [hasClickedTerms, setTermsHasClicked] = useState<Boolean>(false);
  const [feedback, setFeedback] = useState<string>("");
  const [open, setOpen] = useState(true);
  const [calledError, setCalledError] = useState<boolean>(false);

  const handleTerms = () => setTermsHasClicked(true);
  const handleTermsClose = () => setTermsHasClicked(false);


  const [checked, setChecked] = useState(false);

  const loginHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.post("user/login", { email, password });
      console.log(response)
      if (response.status === 200) {
        if (response.data.user.acceptedTerms == true) {
          history.push("/dashboard");
          localStorage.setItem("token", response.data.token);
          console.log(response.data.user.type)
        } else {
          handleTerms()
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setFeedback((error as AxiosError).response?.data.message);
        setCalledError(true)
      }
    }
  };



  function inputHandler(event: { key: string; }) {
    if (event.key === 'Enter') {
      loginHandler()
    }
  }
  return (
    <StyledDiv>

      <HeaderDiv mobile={isMobile}>
        <StyledH1>Cartão Virtual Unifor</StyledH1>
        <StyledLoginText>{text}</StyledLoginText>
        <StyledLoginText>{secondText}</StyledLoginText>
      </HeaderDiv>
      {hasClickedTerms && <Terms onClick={handleTermsClose}></Terms>}

      <StyledLogin>
        <StyledLabel htmlFor="login">E-mail</StyledLabel>
        <StyledInput
          id="login"
          type="email"
          placeholder="Endereço de e-mail"
          onChange={event => setUser(event.target.value)}
          onKeyPress={inputHandler}
        />
      </StyledLogin>

      <StyledLogin>
        <StyledLabel htmlFor="senha">Senha</StyledLabel>
        <StyledInput
          id="senha"
          type="password"
          placeholder="Senha"
          onChange={event => setPassword(event.target.value)}
          onKeyPress={inputHandler}
        />
      </StyledLogin>


      <StyledButton onClick={loginHandler} type="submit">
        Entrar
      </StyledButton>

      {calledError && (


 <>
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
 
 
 
      
 </>
      )
      }


      <StyledLinkText className="SecondLink">
        <StyledA href="/recuperarsenha">Esqueceu a senha?</StyledA>
      </StyledLinkText>
    </StyledDiv>
  );
};
