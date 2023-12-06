// @ts-ignore

import React from 'react';
import styled from 'styled-components';

import {TEXT_STYLES} from "../../Constants/Typography/Typography";
import {NEUTRAL_DARKSNOW, NEUTRAL_GRAY, NEUTRAL_LIGHTGRAY, NEUTRAL_SNOWWHITE} from "../../Constants/Colors/Colors";
import Button from "../UI_components/Button/Button";

type InfoBlockProps = {
    avatar: string,
    name: string,
    profileInformation: string,
    registrationDate: string,
};

const Container = styled.div`
max-width: 210px;
display: flex;
flex-direction: column;
align-items: center;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid ${NEUTRAL_DARKSNOW};
  background-color: ${NEUTRAL_SNOWWHITE};
  box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);;
`;

const Avatar = styled.img`
width: 160px;
border-radius: 50%;
`;

const Name = styled.h2`
  ${Object.entries(TEXT_STYLES.TEXT_BOLD).map(([key, value]) => `${key}: ${value};`).join('\n')};
  color: ${NEUTRAL_GRAY};
`;

const Info = styled.p`
    ${Object.entries(TEXT_STYLES.TEXT_CAPTION_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')};
  color: ${NEUTRAL_LIGHTGRAY};
`;


const Buttons = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`;

const Icons = styled.div`
display: flex;
justify-content: space-around;
width: 60%;
font-size: 24px;
`;

const RegDate = styled.p`
    ${Object.entries(TEXT_STYLES.TEXT_CAPTION_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')};
  color: ${NEUTRAL_LIGHTGRAY};
`;

const InfoBlock: React.FC<InfoBlockProps> = ({ avatar, name, profileInformation, registrationDate }) => {
    return (
        <Container>
            <Avatar src={avatar} />
            <Name>{name}</Name>
            <Info>{profileInformation}</Info>
            <Buttons>
                <Button label={"Follow"} theme={"white"} size={"medium"} state={'enabled'} property={'neutral'}/>
            </Buttons>
            <Icons>


            </Icons>
            <RegDate>{registrationDate}</RegDate>
        </Container>
    );
};



export default InfoBlock;
