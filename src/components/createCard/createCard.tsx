import { useState, useCallback, ChangeEvent } from "react";
import { useMediaQuery } from "react-responsive";

import api from "../../services/api";
import {
  AboutH1,
  AboutDiv,
  StyledColunmInput,
  StyledInputsDiv,
  StyledInput,
  StyledLabel,
  StyledButtonDiv,
  StyledConfirmButton,
  StyledCancelButton,
  CloseLogo,
  BackIcon,
  NextButton, StyledIndicatorStage
} from "./styles";
import { ICreateProps, AttributesCard } from "./types";

export const CreateCard = ({ onClick, getAllCards }: ICreateProps) => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 640px)",
  });
  const [card, setCard] = useState({
    name: "",
    role: "",
    sector: "",
    phoneNumber: "",
    employeeEmail: "",
    whatsAppNumber: "+55",
    website: ""
  });
  const [firstInputs, setFirstInputs] = useState<boolean>(true)
  const [nextInputs, setNextInputs] = useState<boolean>(false);
  const handleNextInputs = () => {
    setFirstInputs(false);
    setNextInputs(true)
  }

  const postCardData = useCallback(async () => {
    const token = localStorage.getItem("token");
    await api.post('/visitcard/new', card, { headers: { Authorization: `Bearer ${token}` } })
    getAllCards();
    onClick()
  }, [card])


  const changeData = useCallback((event: ChangeEvent<HTMLInputElement>, attribute: AttributesCard) => {
    const { value } = event.target
    setCard(currentCard => ({ ...currentCard, [attribute]: value }))
  }, [])

  return (
    <AboutDiv>
      {isMobile ? <BackIcon size={25} onClick={onClick} /> : <CloseLogo size={25} onClick={onClick} />}
      <AboutH1>{isMobile ? "Novo cartão virtual" : "Criar Novo Cartão"}</AboutH1>
     
      {isMobile && firstInputs && <>
        <StyledIndicatorStage> ETAPA (1/2)</StyledIndicatorStage>
      <StyledInputsDiv>
        
        <StyledColunmInput>
          <StyledLabel htmlFor="nome">Nome</StyledLabel>
          <StyledInput id="nome" onChange={event => changeData(event, 'name')} />
          <StyledLabel htmlFor="cargo">Cargo</StyledLabel>
          <StyledInput id="Cargo" onChange={event => changeData(event, 'role')} />
          <StyledLabel htmlFor="setor">Setor</StyledLabel>
          <StyledInput id="setor" onChange={event => changeData(event, 'sector')} />
          <NextButton onClick={handleNextInputs}>Próximo</NextButton>
        </StyledColunmInput>

      </StyledInputsDiv>
        
      </>
      }

      {isMobile && !firstInputs && nextInputs && <>
        <StyledIndicatorStage> ETAPA (2/2)</StyledIndicatorStage>
        <StyledInputsDiv>
          <StyledColunmInput>
            <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
            <StyledInput id="e-mail" type="email" onChange={event => changeData(event, 'employeeEmail')} />
            <StyledLabel htmlFor="number">Telefone</StyledLabel>
            <StyledInput id="number" onChange={event => changeData(event, 'phoneNumber')} />
            <StyledLabel htmlFor="Whatsapp">Whatsapp</StyledLabel>
            <StyledInput id="Whatsapp" onChange={event => changeData(event, 'whatsAppNumber')} value={card.whatsAppNumber}  />
            <StyledLabel htmlFor="site">Site</StyledLabel>
            <StyledInput id="site" onChange={event => changeData(event, 'website')} />
            <NextButton onClick={postCardData}>Gerar Cartão</NextButton>
          </StyledColunmInput>
         
        </StyledInputsDiv>
      
          
       
      </>}

      {!isMobile && <>
        <StyledInputsDiv>
          <StyledColunmInput>
            <StyledLabel htmlFor="nome">Nome</StyledLabel>
            <StyledInput id="nome" onChange={event => changeData(event, 'name')} />
            <StyledLabel htmlFor="cargo">Cargo</StyledLabel>
            <StyledInput id="Cargo" onChange={event => changeData(event, 'role')} />
            <StyledLabel htmlFor="setor">Setor</StyledLabel>
            <StyledInput id="setor" onChange={event => changeData(event, 'sector')} />
            <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
            <StyledInput id="e-mail" type="email" onChange={event => changeData(event, 'employeeEmail')} />
          </StyledColunmInput>

          <StyledColunmInput>
            <StyledLabel htmlFor="number">Telefone</StyledLabel>
            <StyledInput id="number" onChange={event => changeData(event, 'phoneNumber')} />
            <StyledLabel htmlFor="Whatsapp">Whatsapp</StyledLabel>
            <StyledInput id="Whatsapp" onChange={event => changeData(event, 'whatsAppNumber')}value={card.whatsAppNumber}  />
            <StyledLabel htmlFor="site">Site</StyledLabel>
            <StyledInput id="site" onChange={event => changeData(event, 'website')} />
          </StyledColunmInput>
        </StyledInputsDiv>
        <StyledButtonDiv>
          <StyledConfirmButton onClick={postCardData}>Confirmar</StyledConfirmButton>
          <StyledCancelButton onClick={onClick}>Cancelar</StyledCancelButton>
        </StyledButtonDiv>
      </>}

    </AboutDiv>
  );
};
