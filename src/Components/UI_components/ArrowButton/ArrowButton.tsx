import React from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import arrowRight from '../../../Images/Icons/arrow_right.png'
// @ts-ignore
import arrowLeft from '../../../Images/Icons/arrow_left.png'
import {NEUTRAL_DARKSNOW, NEUTRAL_SNOWWHITE} from "../../../Constants/Colors/Colors";

interface ButtonProps {
    arrowDirection: 'left' | 'right';
    onClick?: () => void;
    disabled: boolean;
}

const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;  
  background-color: ${NEUTRAL_SNOWWHITE};
  cursor: ${props => props.disabled ? '' : 'pointer'};  
  border: none;

  &:hover {
    border: 2px solid ${NEUTRAL_DARKSNOW};
  }
  
  ${props => props.disabled && css`
    opacity: .3
  `}
  
`;



const ArrowButton: React.FC<ButtonProps> = ({ arrowDirection, onClick, disabled }) => {
    console.log(disabled)
    return (
        <Button arrowDirection={arrowDirection} onClick={onClick} disabled={disabled}>
            {arrowDirection === 'left' ? (
                <img src={arrowLeft} alt="Left Arrow" />
            ) : (
                <img src={arrowRight} alt="Right Arrow" />
            )}
        </Button>
    );
};

export default ArrowButton;