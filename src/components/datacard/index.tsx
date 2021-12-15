import { useState, useCallback, ChangeEvent } from "react";

import {
  MainDiv,
  DataCardContainer,
  DataID,
  DataInfo,
  DataProperty,
  DataTitle,
  StyledButton,
  StyledShareButton,
  ShareIcon,
  CancelButton,
  SaveButton,
  EditButtonsDiv,
  ImageCard,
  TrashIcon,
  EditIcon,
  BackIcon,
  ImageHeader,
  ImageInfo,
  ImageLabelName,
  ImageLabelRole,
  ImageLabelSector,
  ImageLinksCotainer,
  ImageLink,
  ImageIcon,
  ImageWhiteLine,
  ImageArrowLeft,
  ImageArrowRight,
  ImageFooter,
  PreViewButton,
  MobileDiv
} from "./styles";
import { AttributesCard, IDataProps } from "./types";
import { PopUpDelete } from "../popUPDeleteCard";
import { SharePopUp } from "../sharePopUp";
import api from "../../services/api";
import { useMediaQuery } from "react-responsive";

export const DataCard = ({ info, getAllCards, onClick }: IDataProps, attribute: AttributesCard) => {
  const [editCard, setEdit] = useState<boolean>(true);
  const token = localStorage.getItem("token");
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [previewCard, setPreviewCard] = useState<boolean>(false);

  const hanndleSetPreviwCard = () => setPreviewCard(true);
  const isMobile = useMediaQuery({
    query: "(max-device-width: 640px)",
  });
  const [hasShareClicked, setShareClicked] = useState<boolean>(false);

  const handlerSharePopUp = () => {setShareClicked(true);
  console.log("clicado")}

  const [card, setCard] = useState({
    id: info.id,
    name: info.name,
    role: info.role,
    sector: info.sector,
    phoneNumber: info.phoneNumber,
    employeeEmail: info.employeeEmail,
    whatsAppNumber: info.whatsAppNumber,
    website: info.website,
    url: info.url
  });

  const updateCardData = useCallback(async () => {
    const token = localStorage.getItem("token");
    await api.put(`/visitcard/update/${info.id}`, card, { headers: { Authorization: `Bearer ${token}` } })
    getAllCards();
    onClick()
  }, [card])

  const changeData = useCallback((event: ChangeEvent<HTMLInputElement>, attribute: AttributesCard) => {
    const { value } = event.target
    setCard(currentCard => ({ ...currentCard, [attribute]: value }))
  }, [])

  const handlerDelete = async () => {
    await api.delete(`/visitcard/delete/${info.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getAllCards();
    onClick();
  };

  const handlerShareClose = () => {
    setShareClicked(false);
    console.log(card.url)
  }
  const handlerDeletePopUp = () => setHasClicked(true);

  const handlerEdit = () => setEdit(false);
  const handlerEditFalse = () => setEdit(true);

  return (
    <>
      {hasClicked && <PopUpDelete onClick={onClick} DeleteCard={handlerDelete} />}
      {hasShareClicked && <SharePopUp onClick={handlerShareClose} url={card.url} />}

      <MainDiv>
      {isMobile && hasShareClicked && <SharePopUp onClick={handlerShareClose} url={card.url} />}
        <DataCardContainer>
          {!isMobile && <ImageCard >
            <ImageHeader>
            </ImageHeader>
            <ImageWhiteLine />
            <ImageInfo>
              <ImageLabelName>{info.name}</ImageLabelName>
              <ImageLabelRole>{info.role}</ImageLabelRole>
              <ImageLabelSector>{info.sector}</ImageLabelSector>
            </ImageInfo>

            <ImageLinksCotainer>
              <ImageArrowRight />
              <ImageLink>

                <ImageIcon src="https://media.discordapp.net/attachments/814173500486451242/910619501773594634/Whatsapp.png"></ImageIcon>
              </ImageLink>
              <ImageLink>
                <ImageIcon src="https://media.discordapp.net/attachments/814173500486451242/910624436422590474/Phone_1.png"></ImageIcon>
              </ImageLink>
              <ImageLink>
                <ImageIcon src="https://media.discordapp.net/attachments/814173500486451242/910624649556152320/Email_1.png"></ImageIcon>
              </ImageLink>
              <ImageLink>
                <ImageIcon src="https://media.discordapp.net/attachments/814173500486451242/910619499349311548/Website.png"></ImageIcon>
              </ImageLink>
              <ImageArrowLeft />
            </ImageLinksCotainer>
          </ImageCard>}
          {isMobile && <BackIcon size={30} onClick={onClick} />}
          {isMobile && previewCard && <MobileDiv><ImageCard >
            <ImageHeader>
            </ImageHeader>
            <ImageWhiteLine />
            <ImageInfo>
              <ImageLabelName>{info.name}</ImageLabelName>
              <ImageLabelRole>{info.role}</ImageLabelRole>
              <ImageLabelSector>{info.sector}</ImageLabelSector>
            </ImageInfo>

            <ImageLinksCotainer>
              <ImageArrowRight />
              <ImageLink>

                <ImageIcon src="https://media.discordapp.net/attachments/814173500486451242/910619501773594634/Whatsapp.png"></ImageIcon>
              </ImageLink>
              <ImageLink>
                <ImageIcon src="https://media.discordapp.net/attachments/814173500486451242/910624436422590474/Phone_1.png"></ImageIcon>
              </ImageLink>
              <ImageLink>
                <ImageIcon src="https://media.discordapp.net/attachments/814173500486451242/910624649556152320/Email_1.png"></ImageIcon>
              </ImageLink>
              <ImageLink>
                <ImageIcon src="https://media.discordapp.net/attachments/814173500486451242/910619499349311548/Website.png"></ImageIcon>
              </ImageLink>
              <ImageArrowLeft />
            </ImageLinksCotainer>
          </ImageCard>
          <StyledShareButton onClick={handlerSharePopUp}>
              <ShareIcon />
              Compartilhar Cartão virtual
            </StyledShareButton>
          </MobileDiv>}


          {!previewCard && <>   <DataInfo>
            <DataTitle>{isMobile ? `${info.name}` : "Dados do cartão"}</DataTitle>

            {isMobile && <PreViewButton onClick={hanndleSetPreviwCard}> Visualizar Cartão Virtual</PreViewButton>}

            <DataID>Nome</DataID>
            <DataProperty
              id="nome"
              onChange={event => changeData(event, 'name')}
              placeholder={info.name}
              disabled={editCard}
              value={card.name}
            ></DataProperty>
            <DataID>Cargo</DataID>
            <DataProperty
              id="role"
              onChange={event => changeData(event, 'role')}
              placeholder={info.role}
              disabled={editCard}
              value={card.role}
            ></DataProperty>
            <DataID>Setor</DataID>
            <DataProperty
              id="sector"
              onChange={event => changeData(event, 'sector')}
              placeholder={info.sector}
              disabled={editCard}
              value={card.sector}
            ></DataProperty>
            <DataID>E-mail</DataID>
            <DataProperty
              id="employeeEmail"
              onChange={event => changeData(event, 'employeeEmail')}
              placeholder={info.employeeEmail}
              disabled={editCard}
              value={card.employeeEmail}
            ></DataProperty>
            <DataID >Telefone</DataID>
            <DataProperty
              id="phoneNumber"
              onChange={event => changeData(event, 'phoneNumber')}
              placeholder={info.phoneNumber}
              disabled={editCard}
              value={card.phoneNumber}
            ></DataProperty>
            <DataID>Whatsapp</DataID>
            <DataProperty
              id="whatsAppNumber"
              onChange={event => changeData(event, 'whatsAppNumber')}
              placeholder={info.whatsAppNumber}
              disabled={editCard}
              value={card.whatsAppNumber}
            ></DataProperty>
            <DataID>Site</DataID>
            <DataProperty
              id="website"
              onChange={event => changeData(event, 'website')}
              placeholder={info.website}
              disabled={editCard}
              value={card.website}
            ></DataProperty>
            {editCard &&
              <StyledShareButton onClick={handlerSharePopUp}>
                <ShareIcon />
                Compartilhar Cartão virtual
              </StyledShareButton>
            }
            {!editCard && <EditButtonsDiv> <SaveButton onClick={updateCardData}>Salvar</SaveButton>  <CancelButton onClick={handlerEditFalse}>Cancelar</CancelButton></EditButtonsDiv>}
          </DataInfo>
            {editCard && (
              <>
                <StyledButton onClick={handlerEdit}>{isMobile ? <EditIcon size={20} /> : "Editar"}</StyledButton>
                <StyledButton onClick={handlerDeletePopUp}>{isMobile ? <TrashIcon size={20} /> : "Excluir"}</StyledButton>
              </>
            )}</>}

        </DataCardContainer>
      </MainDiv>
    </>
  );
};
