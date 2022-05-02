import Collapse from "@mui/material/Collapse";
import { useState, useCallback, ChangeEvent } from "react";
import { useMediaQuery } from "react-responsive";
import Axios, { AxiosError } from "axios";


import api from "../../services/api";
import Expire from "../expire/expire";
import {
  AboutH1,
  AboutDiv,
  StyledColunmInput,
  StyledInputsDiv,
  StyledInput,
  StyledSectorInput,
  StyledNameInput,
  StyledPhoneInput,
  StyledLabel,
  StyledButtonDiv,
  StyledConfirmButton,
  StyledCancelButton,
  CloseLogo,
  BackIcon,
  NextButton, StyledIndicatorStage, StyledAlert
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
    whatsAppNumber: "",
    employeeEmail: "",
    website: ""
  });




  const [feedback, setFeedback] = useState<string>("");
  const [open, setOpen] = useState(true);
  const [calledError, setCalledError] = useState<boolean>(false);
  const [firstInputs, setFirstInputs] = useState<boolean>(true)
  const [nextInputs, setNextInputs] = useState<boolean>(false);
  const handleNextInputs = () => {
    setFirstInputs(false);
    setNextInputs(true)
  }

  const postCardData = useCallback(async () => {
    const token = localStorage.getItem("token");
    try{
      await api.post('/visitcard/new', card, { 
        headers: { Authorization: `Bearer ${token}` }}).then(response =>{
        console.log(response)
      }
      )

    }
    catch (error) {
      if (Axios.isAxiosError(error)) {
        setFeedback((error as AxiosError).response?.data.message);
        setCalledError(true)

      }
    }
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
            <StyledNameInput id="nome" onChange={event => changeData(event, 'name')} />
            <StyledLabel htmlFor="cargo">Cargo</StyledLabel>
            <StyledInput id="Cargo" onChange={event => changeData(event, 'role')} />
            <StyledLabel htmlFor="setor">Setor</StyledLabel>
            <StyledSectorInput id="setor" onChange={event => changeData(event, 'sector')} />
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
            <StyledPhoneInput id="number" mask="(99)99999-9999" onChange={event => changeData(event, 'phoneNumber')} />
            <StyledLabel htmlFor="Whatsapp">Whatsapp</StyledLabel>
            <StyledPhoneInput id="Whatsapp" mask="+55 (99)99999-9999" onChange={event => changeData(event, 'whatsAppNumber')} value={card.whatsAppNumber} />
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
            <StyledNameInput id="nome" onChange={event => changeData(event, 'name')} />
            <StyledLabel htmlFor="cargo">Cargo</StyledLabel>
            <StyledInput id="Cargo" onChange={event => changeData(event, 'role')} />
            <StyledLabel htmlFor="setor">Setor</StyledLabel>
            <StyledSectorInput id="setor" onChange={event => changeData(event, 'sector')} />
            <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
            <StyledInput id="e-mail" type="email" onChange={event => changeData(event, 'employeeEmail')} />
          </StyledColunmInput>

          <StyledColunmInput>
            <StyledLabel htmlFor="number">Telefone</StyledLabel>
            <StyledPhoneInput id="number" mask="(99)99999-9999" onChange={event => changeData(event, 'phoneNumber')} />
            <StyledLabel htmlFor="Whatsapp">Whatsapp</StyledLabel>
            <StyledPhoneInput id="Whatsapp" mask="+55 (99)99999-9999" onChange={event => changeData(event, 'whatsAppNumber')} value={card.whatsAppNumber} />
            <StyledLabel htmlFor="site">Site</StyledLabel>
            <StyledInput id="site" onChange={event => changeData(event, 'website')} />
          </StyledColunmInput>
        </StyledInputsDiv>
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
        <StyledButtonDiv>
          <StyledConfirmButton onClick={postCardData}>Confirmar</StyledConfirmButton>
          <StyledCancelButton onClick={onClick}>Cancelar</StyledCancelButton>
        </StyledButtonDiv>
      </>}

    </AboutDiv>
  );
};
