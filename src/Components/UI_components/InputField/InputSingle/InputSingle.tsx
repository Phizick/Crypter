import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    NEUTRAL_DARKSNOW,
    NEUTRAL_GRAY,
    NEUTRAL_LIGHTGRAY,
    NEUTRAL_SNOWWHITE,
    PRIMARY_BLUE,
    PRIMARY_GREEN,
    PRIMARY_PINK
} from "../../../../Constants/Colors/Colors";

import arrowIcon from "../../../../Images/Icons/arrow_icon_btn.png";
import correctSearchIcon from "../../../../Images/Icons/correct_search_icon.png"
import loaderIcon from '../../../../Images/Icons/loader.png'
import {TEXT_STYLES} from "../../../../Constants/Typography/Typography";
import closeIcon from '../../../../Images/Icons/close_icon.png';
import {useInputState} from "../../../Hooks/useInputState/useInputState";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input<{ isError: boolean; isSuccess: boolean }>`
  width: 256px;
  height: 28px;
  border: 2px solid
    ${(props) => {
    if (props.isError) return `${PRIMARY_PINK}`;
    if (props.isSuccess) return `${PRIMARY_GREEN}`;
    return `${NEUTRAL_DARKSNOW}`;
}};
  border-radius: 90px;
  padding: 8px 8px 8px 16px;
  outline: none;
  gap: 18px;
  flex-shrink: 0;
`;

const ErrorText = styled.p`
  margin: 5px 0;
  color: ${PRIMARY_PINK};
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')};
  position: absolute;
  top: 50px;
  left: 15px;
`;

const Button = styled.button<{ isLoading: boolean; isSuccess: boolean;  disabled?: boolean }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => (props.isSuccess ? `${PRIMARY_GREEN}` : `${PRIMARY_BLUE}`)};
  color: ${(props) => (props.isSuccess ? `${NEUTRAL_SNOWWHITE}` : `${PRIMARY_BLUE}`)};
  border: none;
  cursor: ${(props) => (props.isLoading ? "progress" : "pointer")};
  position: absolute;
  left: 240px;
  top: 6px;  
  justify-content: center;
  align-items: center;
  display: flex;

  ${(props) => props.disabled && `
    opacity: .2;
    color: ${NEUTRAL_LIGHTGRAY};
    cursor: not-allowed;
    background-color: ${NEUTRAL_GRAY}
  `}
`;

const CloseBtn = styled.div`
  display: flex;
  position: absolute;
  top: 13px;
  left: 210px;
  width: 22px;
  height: 22px;
  cursor: pointer;  
`;

const SubmitLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;  
  border-radius: 50%;
  animation: spin 3s linear infinite;
  position: absolute;
  left: 240px;
  top: 6px;
  background-color: ${PRIMARY_BLUE};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }    
  } 
`;



const InputSingle: React.FC<{ placeholder: string }> = ({ placeholder }) => {
    const {
        inputValue,
        isError,
        isLoading,
        isSuccess,
        disabledBtn,
        handleInputChange,
        handleSubmit,
        clearInput,
        getButtonIcon,
    } = useInputState();

    return (
        <form onSubmit={handleSubmit}>
            <InputContainer>

                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    isError={isError}
                    isSuccess={isSuccess}
                    placeholder={placeholder}
                    style={TEXT_STYLES.TEXT_CAPTION}
                />
                {isError && <ErrorText>Email is incorrect.</ErrorText>}
                {isError && (
                    <CloseBtn>
                        <img
                            src={closeIcon}
                            alt={"close icon"}
                            onClick={() => clearInput()}
                        />
                    </CloseBtn>
                )}
                {isLoading ? (
                    <SubmitLoader>
                        <img src={loaderIcon} alt={"icon"} />
                    </SubmitLoader>
                ) : (
                    <Button
                        type="submit"
                        disabled={disabledBtn}
                        isLoading={isLoading}
                        isSuccess={isSuccess}
                    >
                        <img src={getButtonIcon()} alt={"icon"} />
                    </Button>
                )}
            </InputContainer>
        </form>
    );
};

export default InputSingle;