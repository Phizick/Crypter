import React from "react";
import styled from "styled-components";
import {TEXT_STYLES} from "../../Constants/Typography/Typography";
import {NEUTRAL_GRAY, NEUTRAL_LIGHTGRAY, SECONDARY_BROWN} from "../../Constants/Colors/Colors";
// @ts-ignore
import avatarMock from '../../Images/Avatars/avatar.png'

interface AvatarProps {
    name: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AvatarImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${SECONDARY_BROWN};
  border-radius: 50%;
  background-image: url(${avatarMock});
  background-position: center;
  background-repeat: no-repeat;
`;

const UserInfo = styled.div`
  margin-left: 10px;
`;

const Title = styled.h2`
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')};
  color: ${NEUTRAL_LIGHTGRAY};
  margin: 0;
`;

const Name = styled.p`
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_BOLD).map(([key, value]) => `${key}: ${value};`).join('\n')};
  margin: 0;
  color: ${NEUTRAL_GRAY};
`;

const AboutUserTitle: React.FC<AvatarProps> = ({ name }) => {
    return (
        <Container>
            <AvatarImage />
            <UserInfo>
                <Title>Creator</Title>
                <Name>{name}</Name>
            </UserInfo>
        </Container>
    );
};
export default AboutUserTitle;