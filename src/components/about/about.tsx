import {
  AboutDiv,
  AboutH1,
  DescritionDiv,
  Descrition,
  Title,
  HorizontalLine,
  BottomDiv,
  TeacherDiv,
  StudentsDiv,
  CloseLogo,
  List,
} from "./styles";
import { IAboutProps } from "./types";

export const About = ({ onClick }: IAboutProps) => {
  return (
    <AboutDiv>
      <CloseLogo size={25} onClick={onClick} />
      <AboutH1>Sobre o Sistema</AboutH1>
      <DescritionDiv>
        <Title>Descrição</Title>
        <Descrition>
          O cartão de visitas virtual é uma ideia da equipe de marketing da Universidade de Fortaleza
            em conjunto com o laboratório de inovação tecnológica Vortex que foi criado com o intuito
             de facilitar a divulgação das informações de contatos dos funcionários da Unifor, tais
              como email, whatsapp e um site de escolha do usuário, possuindo acesso direto aos mesmos.

        </Descrition>
      </DescritionDiv>
      <HorizontalLine />
      <BottomDiv>
        <TeacherDiv>
          <Title>Orientadores</Title>
          <List>Eurico Vasconcelos</List>
          <List>Jonatas Silva</List>
          <List>Yuri Nekan</List>
        </TeacherDiv>
        <StudentsDiv>
          <Title>Alunos</Title>
          <List>Paulo Neto</List>
          <List>Eduardo Santos</List>
          <List>Gabriel Brito</List>
          <List>Jorge Lins</List>
          <List>Samuel Lucas</List>
          <List>Davi Sisnando</List>
        
        </StudentsDiv>
      </BottomDiv>
    </AboutDiv>
  );
};
