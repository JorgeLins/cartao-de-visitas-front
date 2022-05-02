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
    YoutubePlayer,
  } from "./styles";
  import { ITutorialProps } from "./types";

  import React from 'react';
import YouTube from 'react-youtube';

export const Tutorial = ({ onClick }: ITutorialProps) => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    return (
      <AboutDiv>
        <CloseLogo size={25} onClick={onClick} />
        <AboutH1>Usando o Sistema</AboutH1>
        <DescritionDiv>
          <Title>Descrição</Title>
          <Descrition>
            Aqui você vai ver um breve video com um tutorial de como usar o sistema do cartão de visitas.
          </Descrition>
        </DescritionDiv>
        <HorizontalLine />
        <BottomDiv>


        <YoutubePlayer videoId="E1md01ooOhE"/>
        </BottomDiv>
    
      </AboutDiv>
    );
  };
  