import React from "react";
import styled, { css } from 'styled-components';
import {
    PRIMARY_BLUE,
    NEUTRAL_GRAY,
    NEUTRAL_DARKSNOW, NEUTRAL_WHITE, NEUTRAL_SNOWWHITE, NEUTRAL_LIGHTGRAY
} from '../../../Constants/Colors/Colors'
import {TEXT_STYLES} from "../../../Constants/Typography/Typography";
import { ButtonHTMLAttributes } from 'react';


interface ButtonProps {
    label: string;
    icon?: any;
    theme: "white" | "dark";
    size: "small" | "medium";
    state: "enabled" | "disabled" | "hover";
    property: "neutral" | "light";
    iconPosition?: "left" | "right";
    onClick?: () => void;
}

const ButtonWrapper = styled.button<ButtonProps>`  
  border-radius: 90px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 10px;
  transition: filter .5s;
  width: fit-content;
  cursor: pointer;
  
  &.dark {
    background-color: transparent;
    border: 2px solid ${NEUTRAL_LIGHTGRAY};
    color: ${NEUTRAL_SNOWWHITE};
    
    &.disabled {
      background-color: ${NEUTRAL_SNOWWHITE};
      color: ${NEUTRAL_GRAY};
    }    
    
    &:hover {
      background-color: ${NEUTRAL_SNOWWHITE};
      color: ${NEUTRAL_GRAY};
    }
  }  
  
  
  &.small {
    height: 40px;
    padding: 12px 16px;
    ${Object.entries(TEXT_STYLES.TEXT_BUTTON_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')}
  }
 
  &.medium {
    height: 48px;
    padding: 16px 24px;
    ${Object.entries(TEXT_STYLES.TEXT_BUTTON_DEFAULT).map(([key, value]) => `${key}: ${value};`).join('\n')}
  }
  
  &.with-icon {
    flex-direction: row;
    gap: 12px;
  }
  
  &.neutral {
    background-color: ${PRIMARY_BLUE};
    border: none;
    color: ${NEUTRAL_SNOWWHITE};
    
    &.dark {
      background-color: transparent;
      border: 2px solid ${NEUTRAL_LIGHTGRAY};
      color: ${NEUTRAL_SNOWWHITE};
    }
  }
  
  &.light {
    background-color: ${NEUTRAL_WHITE};
    border: 2px solid ${NEUTRAL_DARKSNOW};
    transition: background-color .5s;
    
    &:hover {
      background-color: ${NEUTRAL_GRAY};
      color: ${NEUTRAL_SNOWWHITE};
    }
  }
  
  &.disabled {
    opacity: .5;
    
    &.light {
      background-color: ${NEUTRAL_GRAY};
      color: ${NEUTRAL_SNOWWHITE};
    }
  }
`;

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           icon,
                                           theme,
                                           size,
                                           iconPosition,
                                           onClick,
                                           property,
                                           state
                                       }) => {
    const buttonClasses = `${theme} ${size} ${property} ${state} ${icon ? "with-icon" : ""} ${iconPosition === "right" ? "right" : ""}`;

    return (
        <ButtonWrapper className={buttonClasses} onClick={onClick} property={property} label={''} size={size} state={state}>
            {icon && iconPosition === "left" && icon}
            {label}
            {icon && iconPosition === "right" && icon}
        </ButtonWrapper>
    );
};

export default Button;