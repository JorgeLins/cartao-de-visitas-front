
import { MainDiv,Name,Number,NameNumberDIv } from "./styles"
import { IcardProfileProps } from "./types"
export const CardProfile = ({name,role}:IcardProfileProps) =>{
  
    return(
        <MainDiv>
        <NameNumberDIv>
            <Name>{name}</Name>
            <Number>{role}</Number>
        </NameNumberDIv>
    </MainDiv>
    )
}