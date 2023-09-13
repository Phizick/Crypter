import React from "react";
import styled from 'styled-components';
import {
    PRIMARY_BLUE,
    NEUTRAL_GRAY,
    NEUTRAL_DARKSNOW, NEUTRAL_WHITE, NEUTRAL_SNOWWHITE, NEUTRAL_LIGHTGRAY
} from '../../../Constants/Colors/Colors'
import {TEXT_STYLES} from "../../../Constants/Typography/Typography";
import starIconWhite from '../../../Images/Icons/btn_icon_star_white.png'
import starIconBlack from '../../../Images/Icons/btn_icon_star_black.png'


interface IButtonProps {
    label: string;
    icon?: any;
    theme: "white" | "dark";
    size: "small" | "medium";
    state: "enabled" | "disabled" | "hover";
    property: "neutral" | "light";
    iconPosition?: "left" | "right";
    onClick?: () => void;
}

const ButtonWrapper = styled.button<IButtonProps>`  
  border-radius: 90px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 10px;
  transition: filter .5s;
  width: fit-content;
  cursor: pointer;
  gap: 12px;
  
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

    img {
      transition: filter .5s;
    }

    &:hover img {
      content: url(${starIconWhite});
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

const Button: React.FC<IButtonProps> = ({
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
    const iconComponent = theme === "white" && property !== "light" ? <img src={starIconWhite} alt={'icon'}/> : <img src={starIconBlack} alt={'icon'}/>;

    return (
        <ButtonWrapper className={buttonClasses} onClick={onClick} property={property} label={''} size={size} state={state}>
            {iconPosition === "left" && iconComponent}
            {label}
            {iconPosition === "right" && iconComponent}
        </ButtonWrapper>
    );
};

export default Button;