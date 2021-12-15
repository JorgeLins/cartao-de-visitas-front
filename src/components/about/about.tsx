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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tempor placerat consequat. In et mi vel erat mollis aliquam.
          Suspendisse sodales arcu turpis.
        </Descrition>
      </DescritionDiv>
      <HorizontalLine />
      <BottomDiv>
        <TeacherDiv>
          <Title>Professores</Title>
        </TeacherDiv>
        <StudentsDiv>
          <Title>Estudantes</Title>
        </StudentsDiv>
      </BottomDiv>
    </AboutDiv>
  );
};
