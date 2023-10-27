import React from 'react';
import styled from 'styled-components';


import Feed from "../Feed/Feed";
import image4 from '../../Images/ImageItems/image_6.png'
import avatarTest from '../../Images/Avatars/avatar_6.png'
import {NEUTRAL_LIGHTGRAY} from "../../Constants/Colors/Colors";
import TopCreatorsCard from "../TopCreatorsCard/TopCreatorsCard";
import AboutUserTitle from "../AboutUserTitle/AboutUserTitle";
import Button from "../UI_components/Button/Button";
import {TEXT_STYLES} from "../../Constants/Typography/Typography";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
`;

const Container = styled.div`
  display: flex;  
  gap: 32px;
  max-width: 1440px;
`;

const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > * {
    border-bottom: 1px solid rgba(${NEUTRAL_LIGHTGRAY.slice(4, -1)}, .2); 
    padding-bottom: 24px;
    margin: 0;    
  }

  & > :last-child {
    border-bottom: none;
  }

  & > :first-child {
    border: none;
  }
`;

const ImageSmallContainer = styled.div`
    display: flex;
  flex-direction: column;
  gap: 32px;
  border-right: 1px solid rgba(${NEUTRAL_LIGHTGRAY.slice(4, -1)}, .2);
  padding-right: 32px;
`;

const UserListTitle = styled.p`
  margin: 0;
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_SMALL_BOLD).map(([key, value]) => `${key}: ${value};`).join('\n')}    
`;

const FeedGallery: React.FC = () => (
    <Container>
        <ImageContainer>
            <Feed size={'big'} imageURL={image4} title={'One image'} author={'ruby robinson'} authorAvatar={avatarTest} price={'1000 ETH'} stock={'1 of 3'}/>
            <ImageSmallContainer>
                <Feed size={'small'} imageURL={image4} title={'One image'} author={'ruby robinson'} authorAvatar={avatarTest} price={'1000 ETH'} stock={'1 of 3'}/>
                <Feed size={'small'} imageURL={image4} title={'One image'} author={'ruby robinson'} authorAvatar={avatarTest} price={'1000 ETH'} stock={'1 of 3'}/>
                <Feed size={'small'} imageURL={image4} title={'One image'} author={'ruby robinson'} authorAvatar={avatarTest} price={'1000 ETH'} stock={'1 of 3'}/>
            </ImageSmallContainer>
        </ImageContainer>
        <UsersList>
            <UserListTitle>Latest upload from creators 🔥</UserListTitle>
            <AboutUserTitle name={'test test'} count={1}/>
            <AboutUserTitle name={'test test'} count={2}/>
            <AboutUserTitle name={'test test'} count={3}/>
            <AboutUserTitle name={'test test'} count={4}/>
            <Button label={'Discover more'} theme={'white'} size={'small'} state={'enabled'} property={'light'} iconPosition={'right'}/>
        </UsersList>
    </Container>
);

export default FeedGallery;