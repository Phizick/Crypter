import React, { useState } from 'react';
import styled from 'styled-components';
import {NEUTRAL_LIGHT, NEUTRAL_SNOWWHITE} from "../../Constants/Colors/Colors";

interface CardProps {
    avatar: string;
    name: string;
    amount: number;
}

const CardContainer = styled.div<{ isHovered: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: ${NEUTRAL_SNOWWHITE};
  //border: 1px solid black;
  border-radius: 16px;
  //box-shadow: 0 64px 64px -48px rgba(31, 47, 70, 0.12);
  cursor: pointer;
  width: 200px;  
  box-shadow: ${({ isHovered }) => isHovered && '0 64px 64px -48px rgba(31, 47, 70, 0.3)'};
  transition: all  .3s ease-out;
  &:hover {
    ${({ isHovered }) => isHovered && 'padding-bottom: 50px;'}
  }
`;

const Avatar = styled.img<{ isHovered: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: all 0.3s ease-out;
  transform: ${({ isHovered }) => isHovered && 'scale(1.3)'};
  padding: 24px 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${NEUTRAL_LIGHT};
  margin: 10px 0;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Amount = styled.span`
  font-size: 14px;
`;

const CardHeader = styled.div`
    display: flex;
  padding-bottom: 24px;
  
`;

const TopCreatorsCard: React.FC<CardProps> = ({ avatar, name, amount }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <CardContainer isHovered={isHovered} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <CardHeader>mock</CardHeader>
            <Divider />
            <Avatar src={avatar} alt="Avatar" isHovered={isHovered} />
            <Title>{name}</Title>
            <Amount>{amount}</Amount>
        </CardContainer>
    );
};

export default TopCreatorsCard;