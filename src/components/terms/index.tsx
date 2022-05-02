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
    StyledButton,
    ButtonDiv,
    StyledRefuseButton
  } from "./styles";
  import { ITermsProps } from "./types";
  import axios, { AxiosError } from "axios";
  import api from "../../services/api";
  import { useHistory } from "react-router";
import { useEffect, useState } from "react";

  export const Terms = ({ onClick }: ITermsProps) => {

    const history = useHistory();

    const [terms, setTerms] = useState("")

    const TermsHandler = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await api.get("user/terms_of_privacy", {
          headers: { Authorization: `Bearer ${token}` }
          
      }
      )
        setTerms(response.data.terms)
        console.log(response.data)
      }
      catch{

      }
    }


    const acceptTerms = async () => {
      const token = localStorage.getItem("token");
      const response = await api.put("/user/terms_of_privacy/accept",{}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if(response.status ===200) {

        history.push("/dashboard");
      }

    }

    useEffect(()=>{
      TermsHandler()
      console.log(terms)

    },[TermsHandler])

    return (
      <AboutDiv>
        <AboutH1>Termos de uso</AboutH1>
              <DescritionDiv>
      
                <Descrition>
                  {terms}
                </Descrition>
              
              </DescritionDiv>
                  <ButtonDiv>

              <StyledButton onClick={() => acceptTerms()}>Aceitar</StyledButton>
              <StyledRefuseButton>Recusar</StyledRefuseButton>
                  </ButtonDiv>

        
      </AboutDiv>
    );
  };
  