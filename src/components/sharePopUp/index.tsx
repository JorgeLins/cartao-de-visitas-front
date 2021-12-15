import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import {
  MainDiv,
  StyledEmailP,
  StyledEmailInput,
  StyledButton,
  StyledText,
  StyledDownloadButton,
  StyledDownloadIcon,
  CloseLogo,
} from "./styles";
import { IShareProps } from "./types";

export const SharePopUp = ({ onClick, url }: IShareProps) => {
  const [pdf, setPDF] = useState();
  const [email, setEmail] = useState("");
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    async () => {
      const token = localStorage.getItem("token");
      const initialData = await api.get(`${url}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPDF(initialData.data.data);
    };
  });
  const getCard = useCallback(async () => {
    console.log(url);
    const token = localStorage.getItem("token");
    const data = await api.get(`${url}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(email)
    await api.post('/visitcard/sendEmail ', {email}, { headers: { Authorization: `Bearer ${token}` } })

    setPDF(data.data);
    console.log(data.data);
    onClick();
  }, [onClick, url, email]);
  return (
    <MainDiv>
      <CloseLogo size={18} onClick={onClick} />
      <StyledEmailP>E-mail</StyledEmailP>
      <StyledEmailInput
        id="login"
        type="email"
        placeholder="Endereço de e-mail"
        onChange={(event) => setEmail(event.target.value)}
      />
      <StyledButton onClick={getCard}>Enviar</StyledButton>
      <StyledText>Ou</StyledText>
      <a href={url} download="download_cartao.pdf">
        <StyledDownloadButton onClick={onClick}>
          <StyledDownloadIcon /> Download PDF
        </StyledDownloadButton>
      </a>
    </MainDiv>
  );
};
