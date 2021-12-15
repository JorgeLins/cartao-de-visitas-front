import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios, { AxiosError } from "axios";

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

} from "./styles";
import api from "../../services/api";
import { useHistory } from "react-router";


export const LoginModal = ({ text, secondText }: Texts) => {
  const history = useHistory();

  const isMobile = useMediaQuery({
    query: "(max-device-width: 640px)",
  });


  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const response = await api.post("user/login", { email, password });
      if (response.status === 200) {
        api.put("/user/terms_of_privacy/accept",{}, {
          headers: { Authorization: `Bearer ${response.data.token}` },
        });
        localStorage.setItem("token", response.data.token);
        history.push("/dashboard");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert((error as AxiosError).response?.data.message);
      }
    }
  };


  return (
    <StyledDiv>
     
      <HeaderDiv mobile={isMobile}>
        <StyledH1>Cartão Virtual Unifor</StyledH1>
        <StyledLoginText>{text}</StyledLoginText>
        <StyledLoginText>{secondText}</StyledLoginText>
      </HeaderDiv>

      <StyledLogin>
        <StyledLabel htmlFor="login">Login</StyledLabel>
        <StyledInput
          id="login"
          type="email"
          placeholder="Endereço de e-mail"
          onChange={event => setUser(event.target.value)}
        />
      </StyledLogin>

      <StyledLogin>
        <StyledLabel htmlFor="senha">Senha</StyledLabel>
        <StyledInput
          id="senha"
          type="password"
          placeholder="Senha"
          onChange={event => setPassword(event.target.value)}
        />
      </StyledLogin>

      <StyledButton onClick={loginHandler} type="submit">
        Entrar
      </StyledButton>

      <StyledLinkText className="SecondLink">
        <StyledA href="/recuperarsenha">Esqueceu a senha?</StyledA>
      </StyledLinkText>
    </StyledDiv>
  );
};
