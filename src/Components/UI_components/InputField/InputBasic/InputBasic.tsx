import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    NEUTRAL_LIGHT,
    PRIMARY_BLUE,
    PRIMARY_GREEN,
    PRIMARY_PINK
} from "../../../../Constants/Colors/Colors";


import {TEXT_STYLES} from "../../../../Constants/Typography/Typography";
import closeIcon from '../../../../Images/Icons/incorrect_search_icon.png'
import {useInputState} from "../../../Hooks/useInputState/useInputState";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input<{ isError: boolean; isSuccess: boolean }>`
  width: 256px;
  height: 28px;
  margin-top: 25px;
  border: 2px solid
    ${(props) => {
    if (props.isError) return `${PRIMARY_PINK}`;
    if (props.isSuccess) return `${PRIMARY_GREEN}`;
    return `${PRIMARY_BLUE}`;
}};
  border-radius: 12px;
  padding: 8px 8px 8px 16px;
  outline: none;
  gap: 18px;
  flex-shrink: 0;
`;


const CloseBtn = styled.div`
  display: flex;
  position: absolute;
  top: 37px;
  left: 250px;
  width: 22px;
  height: 22px;
  cursor: pointer;  
  opacity: .5;
`;

const Label = styled.label`
  ${Object.entries(TEXT_STYLES.TEXT_HAIRLINE_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')};
  position: absolute;
  top: 6px;
  left: 2px;
  color: ${NEUTRAL_LIGHT};
`;


const InputBasic: React.FC<{ placeholder: string, label: string }> = ({ placeholder , label}) => {
    const {
        inputValue,
        isError,
        isSuccess,
        handleInputChange,
        handleSubmit,
        clearInput,
    } = useInputState();

    return (
        <form onSubmit={handleSubmit}>
            <InputContainer>
                <Label htmlFor="inputField">{label}</Label>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    isError={isError}
                    isSuccess={isSuccess}
                    placeholder={placeholder}
                    style={TEXT_STYLES.TEXT_CAPTION}
                />
                {isError && (
                    <CloseBtn>
                        <img
                            src={closeIcon}
                            alt={"close icon"}
                            onClick={() => clearInput()}
                        />
                    </CloseBtn>
                )}
                        {/*<img src={getButtonIcon()} alt={"icon"} />*/}
            </InputContainer>
        </form>
    );
};

export default InputBasic;