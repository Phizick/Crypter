import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {HEADLINERS_STYLES, TEXT_STYLES} from "../../Constants/Typography/Typography";
import AboutUserTitle from "../AboutUserTitle/AboutUserTitle";
import BidItem from "../BidItem/BidItem";
import Button from "../UI_components/Button/Button";
import ArrowButton from "../UI_components/ArrowButton/ArrowButton";

interface SliderProps {
    imageUrl: string;
    username: string;
    price: number;
    imageName: string;
    expiryTime: number;
    rightArrow?: () => void;
    leftArrow?: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 128px;
  transition: gap .6s ease;
  
  @media (max-width: 1210px) {
    gap: 32px
  }
  
  @media (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width: 554px) {
    padding: 8px;
    max-width: 352px;
  }  
`;

const Image = styled.img`
  height: 800px;
  width: 640px;
  border-radius: 16px;
  transition: width .5s ease;   
  
  @media (max-width: 1210px) {
    width: 528px;    
  }

  @media (max-width: 554px) {
    width: 100%;
    height: auto;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 352px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;


const Price = styled.span`
  margin-top: 5px;
`;

const ImageName = styled.div`  
  ${Object.entries(HEADLINERS_STYLES.HEADLINE_FIRST).map(([key, value]) => `${key}: ${value};`).join('\n')};
  flex-wrap: wrap;
  max-width: 352px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ArrowContainer = styled.div`
    display: flex;
  flex-direction: row;
  gap: 8px;

  @media (max-width: 920px) {    
    justify-content: center;
    align-items: center;
  }
`;

const AuctionItem: React.FC<SliderProps> = ({
                                           imageUrl,
                                           username,
                                           price,
                                           imageName,
                                           expiryTime,
                                                rightArrow,
                                                leftArrow,
                                       }) => {
    const [timeRemaining, setTimeRemaining] = useState(expiryTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [expiryTime]);


    return (
        <Container>
            <Image src={imageUrl} alt={imageName} />
            <InfoContainer>
                <UserInfo>
                    <ImageName>{imageName}</ImageName>
                    <AboutUserTitle name={username}/>
                </UserInfo>
                <BidItem time={expiryTime} price={price}/>
                <ButtonContainer>
                    <Button label={'Place a bid'} theme={"white"} size={"medium"} state={"enabled"} property={"neutral"}/>
                    <Button label={'View item'} theme={"white"} size={"medium"} state={"enabled"} property={"light"}/>
                </ButtonContainer>
                <ArrowContainer>
                    <ArrowButton arrowDirection={"left"} onClick={leftArrow}/>
                    <ArrowButton arrowDirection={"right"} onClick={rightArrow}/>
                </ArrowContainer>
            </InfoContainer>
        </Container>
    );
};


export default AuctionItem;