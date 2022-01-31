/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

import { Card } from "../../components/card/card";
import { DashboardHeader } from "../../components/dashboardHeader/dashboardHeader";
import { DataCard } from "../../components/datacard/index";
import api from "../../services/api";
import { CreateCard } from "../../components/createCard/createCard";
import { CardProfile } from "../../components/cardProfile";
import {
  StyledP,
  StyledSearchInput,
  StyledIcon,
  StyledSelect,
  StyledDivSearch,
  StyledDiv,
  CardsDiv,
  AllCardsDiv,
  StyledPagination,
  CloseLogo,
  SearchLogo,
  StyledDivChangePage,
  ProfileCardDiv,
  ColorStyledP, StyledHiddenIcon
} from "./styles";
import { ICard } from "./types";
import { useMediaQuery } from "react-responsive";

export const Dashboard = () => {
  let PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [hasCardSelected, setHasCardSelected] = useState<boolean>(false);
  const [hasUserSelected, setHasUserSelected] = useState<boolean>(false);
  const [allCards, setAllCards] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [cardRecent, setCardRecent] = useState([]);
  const [info, setInfo] = useState<ICard>();
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [searchIcon, setSearchIcon] = useState<boolean>(true);
  const [createCard, setCreateCard] = useState<boolean>(false);
  const [showOperator, setShowOperator] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: "(max-device-width: 640px)",
  });
  const getAllProfileCards = useCallback(async () => {
    const token = localStorage.getItem("token");
    PER_PAGE = 4;
    const getProfileCards = await api.get("user", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        pagination: `{ "page": ${currentPage}, "perPage": ${PER_PAGE} }`,
      },
    });
    setPageCount(Math.ceil(getProfileCards.data.total / PER_PAGE));
    setAllCards(getProfileCards.data.data.reverse());
    handleSetOperator();
    console.log(showOperator);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const getAllcards = useCallback(async () => {
    const token = localStorage.getItem("token");
    PER_PAGE = 9;
    const getCards = await api.get("visitcard", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        pagination: `{ "page": ${currentPage}, "perPage": ${PER_PAGE} }`,
      },
    });
    const getCardsRecent = await api.get("visitcard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    handleOffSetOperator();
    setPageCount(Math.ceil(getCards.data.total / PER_PAGE));
    setAllCards(getCards.data.data.reverse());
    setCardRecent(getCardsRecent.data.data.reverse());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  const handleSetOperator = () => {
    setShowOperator(true);
  };
  const handleOffSetOperator = () => {
    setShowOperator(false);
  };
  const handleFilter = async (filters: any) => {
    const token = localStorage.getItem("token");
    const getCardsFilter = await api.get("visitcard", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        pagination: `{ "page": ${currentPage}, "perPage": ${PER_PAGE} }`,
        filters: `{"name": "${filters.target.value}"}`,
      },
    });

    setAllCards(getCardsFilter.data.data);
    if (filters.target.value === "") getAllcards();
  };

  useEffect(() => {
    getAllcards();
    setHasCardSelected(true);
  }, [getAllcards]);

  const handlePageClick = (event: any) => {
    console.log(event);
    setCurrentPage(event.selected + 1);
  };

  const handleCloseCard = () => {
    setHasClicked(false);
    setSearchIcon(true);
    setShowHeader(true);
  };

  const handleCardClicked = (card: ICard) => {
    setHasClicked(true);
    setSearchIcon(false);
    setInfo(card);
  };

  const handleCardsSelected = () => {
    setHasCardSelected(true)
    setHasUserSelected(false);
    getAllcards()
  }

  const handleUserSelected = () => {
    setHasUserSelected(true);
    setHasCardSelected(false);
    getAllProfileCards()
  };
         

  const handleCloseHeaderClickedCard = (card: ICard) => {
    setShowHeader(false);
    setHasClicked(true);
    setSearchIcon(false);
    setInfo(card);
  };
  const handleCloseHeader = () => {
    setCreateCard(true);
    setShowHeader(false);
  };
  const handleOpenHeader = () => {
    setCreateCard(false);
    setShowHeader(true);
  };
  return (
    <>
      {isMobile && !searchOn && searchIcon && (
        <StyledIcon onClick={() => setSearchOn(true)} />
      )}
      {isMobile && !searchIcon && (
        <StyledHiddenIcon/>
      )}

      {isMobile && searchOn && (
        <StyledDivSearch>
          <StyledSearchInput onChange={handleFilter} placeholder="Procurar" />
          <SearchLogo />
          <CloseLogo size={20} onClick={() => setSearchOn(false)} />
        </StyledDivSearch>
      )}
      {isMobile && info && hasClicked && (
        <>
        <DataCard
          info={info}
          getAllCards={getAllcards}
          onClick={handleCloseCard}
        />
        </>
      )}

      {isMobile && showHeader && (
        <DashboardHeader
          getAllcards={getAllcards}
          searchOn={searchOn}
          onClick={handleCloseHeader}
        />
      )}
      {!isMobile && <DashboardHeader getAllcards={getAllcards} />}

      {isMobile && createCard && (
        <CreateCard getAllCards={getAllcards} onClick={handleOpenHeader} />
      )}

      {!isMobile && info && hasClicked && (
        <DataCard
          info={info}
          getAllCards={getAllcards}
          onClick={handleCloseCard}
        />
      )}
      {showHeader && (
        <StyledDiv>
          <StyledP>Recentemente Adicionados</StyledP>

          <CardsDiv>
            {isMobile
              ? cardRecent
                  .slice(0, 2)
                  .map((card: ICard) => (
                    <Card
                      key={card.id}
                      name={card.name}
                      instituition={card.sector}
                      phone={card.phoneNumber}
                      url={card.url}
                      onClick={() => handleCloseHeaderClickedCard(card)}
                    />
                  ))
              : cardRecent
                  .slice(0, 4)
                  .map((card: ICard) => (
                    <Card
                      key={card.id}
                      name={card.name}
                      instituition={card.sector}
                      phone={card.phoneNumber}
                      url={card.url}
                      onClick={() => handleCardClicked(card)}
                    />
                  ))}
          </CardsDiv>
          <StyledDivChangePage>
            {hasCardSelected && !hasUserSelected && (
              <>
                <ColorStyledP onClick={handleCardsSelected}>Todos os cartões</ColorStyledP>
                <StyledP onClick={handleUserSelected}>Todos os usuários</StyledP>
              </>

            )}
            {hasUserSelected && !hasCardSelected && (
              <>
                <StyledP onClick={handleCardsSelected}>Todos os cartões</StyledP>
                <ColorStyledP onClick={handleUserSelected}>Todos os usuários</ColorStyledP>
              </>

            )}
          </StyledDivChangePage>
          {!isMobile && (
            <StyledDivSearch>
              <div>
                <StyledIcon />
                <StyledSearchInput
                  onChange={handleFilter}
                  placeholder="Procurar"
                />
              </div>
              <StyledSelect>
                <option value="" disabled selected>
                  NATI
                </option>
              </StyledSelect>
            </StyledDivSearch>
          )}
          {showOperator && (
            <ProfileCardDiv>
              {isMobile
                ? allCards
                    .slice(0, 6)
                    .map((card: ICard) => (
                      <CardProfile
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        instituition={card.sector}
                        role={card.role}
                        url={card.url}
                        onClick={() => handleCloseHeaderClickedCard(card)}
                      />
                    ))
                : allCards
                    .slice(0, 9)
                    .map((card: ICard) => (
                      <CardProfile
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        instituition={card.sector}
                        role={card.role}
                        url={card.url}
                        onClick={() => handleCardClicked(card)}
                      />
                    ))}
            </ProfileCardDiv>
          )}
          {!showOperator && (
            <AllCardsDiv>
              {isMobile
                ? allCards
                    .slice(0, 6)
                    .map((card: ICard) => (
                      <Card
                        key={card.id}
                        name={card.name}
                        instituition={card.sector}
                        phone={card.phoneNumber}
                        url={card.url}
                        onClick={() => handleCloseHeaderClickedCard(card)}
                      />
                    ))
                : allCards
                    .slice(0, 9)
                    .map((card: ICard) => (
                      <Card
                        key={card.id}
                        name={card.name}
                        instituition={card.sector}
                        phone={card.phoneNumber}
                        url={card.url}
                        onClick={() => handleCardClicked(card)}
                      />
                      
                    ))}
            </AllCardsDiv>
          )}

          <StyledPagination>
            <ReactPaginate
              previousLabel={<BiFirstPage size={20} />}
              nextLabel={<BiLastPage size={20} />}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageRangeDisplayed={7}
              marginPagesDisplayed={1}
            />
          </StyledPagination>
        </StyledDiv>
      )}
    </>
  );
};
