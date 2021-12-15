import { useState } from "react";
import {
  StyledLogin,
  StyledButton,
  StyledDiv,
  StyledLabel,
  StyledInput,
  StyledA,
  MainDiv,
  StyledLinkText
} from "./styles";
import { LoginModal } from "../../components/loginModal/loginModal";

export const Register = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <MainDiv>
        <LoginModal text="" secondText="" />
        <StyledDiv>
          <form>
            <StyledLogin>
              <StyledLabel htmlFor="login">E-mail</StyledLabel>
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
            <StyledButton type="submit">Cadastrar</StyledButton>
          </form>
          <StyledLinkText>
            Já tenho uma conta <StyledA href="/">Entrar</StyledA>
          </StyledLinkText>
        </StyledDiv>
      </MainDiv>
    </>
  );
}
