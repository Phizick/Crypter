import React from "react";
import styled from "styled-components";
import {TEXT_STYLES} from "../../Constants/Typography/Typography";
import {NEUTRAL_LIGHTGRAY} from "../../Constants/Colors/Colors";
import {NEUTRAL_GRAY} from "../../Constants/Colors/Colors";

interface AvatarProps {
    bid: number;
    avatarUrl: string;
    backgroundColor: string;
    name: string;
    lvl: number;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 16px;
`;

const AvatarWrapper = styled.div`
  position: relative;
`;

const AvatarBackground = styled.div<{ color: string }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const BidOverlay = styled.div`
  position: absolute;
  top: -10px;
  left: -5px;
  width: 24px;
  height: 24px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
`;

const BidOverlayText = styled.p`
  margin: 0;
  color: white;
  font-size: 10px;
`;

const UserInfo = styled.div`
  margin-left: 10px;
`;

const Name = styled.h2`
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_BOLD)
          .map(([key, value]) => `${key}: ${value};`)
          .join("\n")};
  color: ${NEUTRAL_GRAY};
  margin: 0;
`;

const Bid = styled.p`
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_BOLD)
          .map(([key, value]) => `${key}: ${value};`)
          .join("\n")};
  margin: 0;
  color: ${NEUTRAL_GRAY};
`;

const UserMiniProfile: React.FC<AvatarProps> = ({ bid, avatarUrl, backgroundColor, name, lvl }) => {
    return (
        <Container>
            <AvatarWrapper>
                <AvatarBackground color={backgroundColor}>
                    <AvatarImage src={avatarUrl} alt="Avatar" />
                </AvatarBackground>
                <BidOverlay>
                    <BidOverlayText>{lvl}</BidOverlayText>
                </BidOverlay>
            </AvatarWrapper>
            <UserInfo>
                <Name>{name}</Name>
                <Bid>{bid}</Bid>
            </UserInfo>
        </Container>
    );
};

export default UserMiniProfile;