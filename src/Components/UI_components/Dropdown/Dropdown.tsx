import React from "react";
import Select,{ components } from "react-select";
import {
    NEUTRAL_BACKGROUND,
    NEUTRAL_DARKSNOW,
    NEUTRAL_GRAY,
    NEUTRAL_LIGHT,
    NEUTRAL_SNOWWHITE
} from "../../../Constants/Colors/Colors";
import {NEUTRAL_WHITE} from "../../../Constants/Colors/Colors";
import {TEXT_STYLES} from "../../../Constants/Typography/Typography";
import styled from "styled-components";

type Option = {
    value: string;
    label: string;
    color: string;
};

type SelectProps = {
    options: Option[];
    onChange: (value: Option | null) => void;
    defaultValue?: Option | null;
    label?: string;
    isDisabled?: boolean;
};

const Label = styled.label`
  ${Object.entries(TEXT_STYLES.TEXT_HAIRLINE_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')};  
  color: ${NEUTRAL_LIGHT};
`;

const CircleOption = (props: any) => (
    <components.Option {...props}>
        <div
            style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                marginRight: 8,
                backgroundColor: props.data.color,
            }}
        />
        {props.children}
    </components.Option>
);

const ColoredSingleValue = (props: any) => (
    <components.SingleValue {...props}>
        <div
            style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                marginRight: 8,
                backgroundColor: props.data.color,
            }}
        />
        {props.children}
    </components.SingleValue>
);

const DropDown: React.FC<SelectProps> = ({ options, onChange, defaultValue, label,isDisabled }) => {

    const textStyles = Object.fromEntries(Object.entries(TEXT_STYLES.TEXT_CAPTION_BOLD).map(([key, value]) => [key, value]));

    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            width: 256,
            height: 40,
            borderColor: state.focused ? NEUTRAL_SNOWWHITE : NEUTRAL_SNOWWHITE,
            borderRadius: 12,
            borderWidth: 2,
            cursor: `pointer`,
            boxShadow: `none`,
            backgroundColor: state.isDisabled ? NEUTRAL_SNOWWHITE : NEUTRAL_BACKGROUND,
            opacity: state.isDisabled ? .6 : 1,
            ...textStyles
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? NEUTRAL_DARKSNOW : NEUTRAL_WHITE,
            paddingLeft: 14,
            display: "flex",
            alignItems: "center",
            cursor: `pointer`,
            borderRadius: 8,
            width: `98%`,
            ...textStyles
        }),
        singleValue: (provided: any, state: any) => ({
            ...provided,
            color: NEUTRAL_GRAY,
            display: "flex",
            alignItems: "center",
            borderColor: state.isSelected ? NEUTRAL_DARKSNOW : NEUTRAL_WHITE,
            ...textStyles
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: NEUTRAL_WHITE,
            borderRadius: 12,
            border: `2px solid ${NEUTRAL_DARKSNOW}`,
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            width: 256,
            justifyItems: `center`,
            ...textStyles
        }),
        indicatorSeparator: (provided: any) => ({
            ...provided,
            display: `none`,
        }),
        container: (provided: any) => ({
            ...provided,
            marginTop: 12,
        }),
    };

    return (
        <>
        <Label>{label}</Label>
        <Select
            isDisabled={isDisabled}
            options={options}
            onChange={onChange}
            defaultValue={defaultValue}
            styles={customStyles}
            components={{ Option: CircleOption, SingleValue: ColoredSingleValue }}
        />
        </>
    );
};

export default DropDown;