
import { useState, useCallback, ChangeEvent } from 'react'
import { MainDiv, StyledTitle, StyledP, StyledInput, StyledInputDiv,StyledAlert, StyledInputText, StyledButtonsDiv, StyledConfirmButton, StyledCancelButton, CloseLogo, HeadDiv } from './styles'
import { INewUserOperator, AttributesRegister } from './types'
import Axios, { AxiosError } from "axios";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import api from "../../services/api";
import { useMediaQuery } from 'react-responsive';

export const CreateNewUserOperator = ({ onClick }: INewUserOperator) => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        enrollment: "",
        role: ""
    })
    const isMobile = useMediaQuery({
        query: "(max-device-width: 640px)",
    });
    const registerHandler = async () => {
        try {
            const token = localStorage.getItem("token");
            await api.post("user/register/operador", register, { headers: { Authorization: `Bearer ${token}` } });
            alert("usuário criado")
            onClick();
        } catch (error) {
            if (Axios.isAxiosError(error)) {
                alert(error);
            }
        }
    }

    const changeData = useCallback((event: ChangeEvent<HTMLInputElement>, attribute: AttributesRegister) => {
        const { value } = event.target
        setRegister(currentRegister => ({ ...currentRegister, [attribute]: value }))
    }, [])

    return (
        <MainDiv>
            <HeadDiv>
                <CloseLogo size={isMobile ? 25 : 21} onClick={onClick} />
                <StyledTitle>Novo Operador</StyledTitle>
            </HeadDiv>
            <StyledAlert severity="info">
                <AlertTitle>Informação</AlertTitle>
                a senha padrão para um operador é — <strong>12345678</strong>
            </StyledAlert>
            <StyledInputDiv>
                <StyledInputText htmlFor="nome">Nome</StyledInputText>
                <StyledInput id="nome" onChange={event => changeData(event, 'name')} />
                <StyledInputText htmlFor="email">Email </StyledInputText>
                <StyledInput id="email" onChange={event => changeData(event, 'email')} />
                <StyledInputText htmlFor="matricula" >Matrícula </StyledInputText>
                <StyledInput id="matricula" onChange={event => changeData(event, 'enrollment')} />
                <StyledInputText htmlFor="cargo" >Cargo </StyledInputText>
                <StyledInput id="cargo" onChange={event => changeData(event, 'role')} />
            </StyledInputDiv>
            <StyledButtonsDiv>
                <StyledConfirmButton onClick={registerHandler} type="submit" >Confirmar</StyledConfirmButton>
                <StyledCancelButton onClick={onClick}>Cancelar</StyledCancelButton>
            </StyledButtonsDiv>
        </MainDiv>
    )
}
