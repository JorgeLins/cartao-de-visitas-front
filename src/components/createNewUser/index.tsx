import { useState } from 'react'

import { MainDiv, StyledTitle, StyledP, StyledButtonsDiv, StyledButton, CloseLogo } from './styles'
import { INewUser } from './types'
import { CreateNewUserOperator } from '../createNewUserOperator'
import { CreateNewUserAdmin } from '../createNewUserAdmin'

export const CreateNewUser = ({ onClick }: INewUser) => {
    const [createAdmin,setCreateAdmin] = useState<Boolean>(false)
    const [createOperator,setCreateOperator] = useState<Boolean>(false)
    const handleCreateAdmin = () => setCreateAdmin(true)
    const handleCreateOperator= () => setCreateOperator(true)

    return (
        <>
            <MainDiv>
                <CloseLogo size={21} onClick={onClick} />
                <StyledTitle>Novo Usuário</StyledTitle>
                <StyledP>Escolha o tipo de usuário para fazer o cadastro.</StyledP>
                <StyledButtonsDiv>
                    <StyledButton onClick ={handleCreateOperator}>Operador</StyledButton>
                    <StyledButton onClick ={handleCreateAdmin}>Administrador    </StyledButton>
                </StyledButtonsDiv>
            
            </MainDiv>
            {createAdmin && <CreateNewUserAdmin onClick ={onClick}/>}
            {createOperator&& <CreateNewUserOperator onClick ={onClick}/>}
        </>
    )
}