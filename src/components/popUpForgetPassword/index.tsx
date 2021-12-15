import {
  MainDiv,
  Styledtext,
  Styledtitle,
  CloseLogo
} from "./styles";

export const PopUpForgetPassword = ()=>{

  return (
    <MainDiv>
      <Styledtitle>Esqueceu a senha?</Styledtitle>
      <CloseLogo />
      <Styledtext>
        Digite o seu e-mail para que possamos enviar as instruções de redefinição de senha.
      </Styledtext>
    </MainDiv> 
  )
}