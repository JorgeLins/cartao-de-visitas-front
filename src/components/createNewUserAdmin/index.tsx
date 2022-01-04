import { useState, useCallback, ChangeEvent } from "react";
import Axios, { AxiosError } from "axios";

import { MainDiv, StyledTitle, StyledP, StyledInput, StyledInputDiv, StyledInputText, StyledButtonsDiv, StyledConfirmButton, StyledCancelButton, CloseLogo, HeadDiv } from './styles'
import { AttributesRegister, INewUserAdmin } from './types'
import api from "../../services/api";

export const CreateNewUserAdmin = ({ onClick }: INewUserAdmin) => {
    const [register, setRegister] = useState({
        name: "",
        password: "",
        email: "",
        enrollment: "",
        role: ""
    })

    const registerHandler = async () => {
        try {
            const token = localStorage.getItem("token");
            await api.post("user/register/administrator", register, { headers: { Authorization: `Bearer ${token}` } });
            alert("usuário criado")
            onClick();
        } catch (error) {
            if (Axios.isAxiosError(error)) {
                alert((error as AxiosError).response?.data.message);
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
            <CloseLogo size={21} onClick={onClick} />
            <StyledTitle>Novo Administrador</StyledTitle>
            </HeadDiv>
            <StyledP>Adicione um email para cadastrar o Administrador.</StyledP>
            <StyledInputDiv>
                <StyledInputText htmlFor="nome">Nome</StyledInputText>
                <StyledInput id="nome" onChange={event => changeData(event, 'name')} />
                <StyledInputText htmlFor="email">Email </StyledInputText>
                <StyledInput id="email" onChange={event => changeData(event, 'email')} />
                <StyledInputText htmlFor="password">Senha </StyledInputText>
                <StyledInput id="password" onChange={event => changeData(event, 'password')} />
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