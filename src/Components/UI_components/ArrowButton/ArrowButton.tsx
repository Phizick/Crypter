import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import arrowRight from '../../../Images/Icons/arrow_right.png'
// @ts-ignore
import arrowLeft from '../../../Images/Icons/arrow_left.png'
import {NEUTRAL_DARKSNOW} from "../../../Constants/Colors/Colors";

interface ButtonProps {
    arrowDirection: 'left' | 'right';
    onClick?: () => void;
}

const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${NEUTRAL_DARKSNOW};
  background-color: transparent;
  cursor: pointer;
  transition: opacity .3s;

  &:hover {
    opacity: .3;
  }
`;

const ArrowButton: React.FC<ButtonProps> = ({ arrowDirection, onClick }) => {
    return (
        <Button arrowDirection={arrowDirection} onClick={onClick}>
            {arrowDirection === 'left' ? (
                <img src={arrowLeft} alt="Left Arrow" />
            ) : (
                <img src={arrowRight} alt="Right Arrow" />
            )}
        </Button>
    );
};

export default ArrowButton;