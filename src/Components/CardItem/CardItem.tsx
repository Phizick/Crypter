/**
 * Компонент карточки.
 *
 * @component
 * @param {Object} props - пропсы.
 * @param {string} props.imageUrl - URL изображения, отображаемого в карточке.
 * @param {string} props.title - название карточки.
 * @param {string[]} props.authors - массив авторов карточки.
 * @returns {JSX.Element} - смонтированный компонент.
 */

import React from 'react';
import styled from 'styled-components';
import Label from "../UI_components/Label/Label";
import CardLikeButton from "../UI_components/CardLikeButton/CardLikeButton";
import Button from "../UI_components/Button/Button";
import {TEXT_STYLES} from "../../Constants/Typography/Typography";

interface Props {
    imageUrl: string;
    title: string;
    authors: string[];
}

const CardSplashContainer = styled.div`
  display: flex;
  position: absolute;
  left: 1px;
  top: -8px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s linear;
  opacity: 0;
  padding: 0 10px;
  width: 200px;
`;

const CardImage = styled.img`
  opacity: 1;
  width: 100%;
  height: 100%;
  display: block;
  transition: opacity 0.3s linear, transform 0.3s linear;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  left: 10px;
  bottom: 2px;
  align-items: center;
  justify-content: center;
  transition: all 0.5s linear;
  opacity: 0;
  padding: 0 10px;
  width: 170px;
  margin-left: 5px;
`;

const CardContainer = styled.div`
  max-width: 256px;
  max-height: 303px;
  border-radius: 16px;
  position: relative;
  display: inline-block;

  &:hover {
    ${CardSplashContainer} {
      opacity: 1;
      transform: translateY(45%);
    }

    ${CardImage} {
      opacity: 0.6;
      transform: scale(1.1);
      cursor: pointer;
    }

    ${ButtonContainer} {
      opacity: 1;
      transform: translateY(-25%);
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  ${Object.entries(TEXT_STYLES.TEXT_LINKS)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')}
`;

const AvatarsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 12px;
  align-items: center;
  margin-top: 8px;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: -8px;  
  border: 2px white solid;
  z-index: 1;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  margin-top: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_SMALL)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')}
`;

const LeftText = styled.p`
  margin-right: 8px;
`;

const RightText = styled.p`
  margin-left: 8px;
`;

const CardOverlay = styled.div`
  background: #000;
  overflow: hidden;
  max-width: 256px;
  max-height: 303px;
  border-radius: 16px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 256px;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StockContainer = styled.div`
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_BOLD)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')}
  margin-left: 115px;
`;


const CardItem: React.FC<Props> = ({imageUrl, title, authors}) => {
    return (
        <ItemContainer>
            <CardContainer>
                <CardOverlay>
                    <CardImage src={imageUrl} alt="Book Cover"/>
                </CardOverlay>
                <CardSplashContainer>
                    <Label color={'green'} state={'solid'} payload={'test'}/>
                    <CardLikeButton/>
                </CardSplashContainer>
                <ButtonContainer>
                    <Button label={'Place a bid'} theme={'white'} size={'small'} state={'enabled'} property={'neutral'}/>
                </ButtonContainer>
            </CardContainer>
            <InfoContainer>
                <TitleContainer>
                    <Title>{title}</Title>
                    <Label color={'green'} state={'ghost'} payload={'2.45 ETH'}/>
                </TitleContainer>
                <AvatarsContainer>
                    {authors.map((author, index) => (
                        <Avatar src={author} alt={`Author ${index}`} key={index}/>
                    ))}
                    <StockContainer>{authors.length} in stock</StockContainer>
                </AvatarsContainer>
                <BottomContainer>
                    <TextContainer>
                        <LeftText>Highest bid</LeftText>
                        <RightText>New bid 🔥</RightText>
                    </TextContainer>
                </BottomContainer>
            </InfoContainer>
        </ItemContainer>
    );
};

export default CardItem;