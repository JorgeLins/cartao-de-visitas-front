
import { MainDiv,Name,Number,NameNumberDIv, ButtonDiv,ButtonTrash } from "./styles"
import { IcardProfileProps, IDeleteProps } from "./types"
import {FaTrashAlt} from "react-icons/fa"
import api from "../../services/api"
import { useEffect, useState } from "react"

export const CardProfile = ({name,role,id}:IcardProfileProps) =>{


    async function deleteUSer(id:string){
        const token = localStorage.getItem("token");
        await api.delete(`user/delete/${id}` , {
            headers: { Authorization: `Bearer ${token}` }
        })
        
    }     

    console.log(id)
  

    return(
        <MainDiv>
            <ButtonDiv>
        <NameNumberDIv>
            <Name>{name}</Name>
            <Number>{role}</Number>
        </NameNumberDIv>
            <ButtonTrash onClick={() => deleteUSer(id)} ><FaTrashAlt></FaTrashAlt></ButtonTrash>
            </ButtonDiv>
    </MainDiv>
    )
}