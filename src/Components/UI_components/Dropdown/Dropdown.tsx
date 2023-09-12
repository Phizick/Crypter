import React from "react";
import Select,{ components } from "react-select";
import {NEUTRAL_DARKSNOW, NEUTRAL_GRAY} from "../../../Constants/Colors/Colors";
import {NEUTRAL_WHITE} from "../../../Constants/Colors/Colors";
import {TEXT_STYLES} from "../../../Constants/Typography/Typography";

type Option = {
    value: string;
    label: string;
    color: string;
};

type SelectProps = {
    options: Option[];
    onChange: (value: Option | null) => void;
    defaultValue?: Option | null;
};

const CircleOption = (props: any) => (
    <components.Option {...props}>
        <div
            style={{
                width: 12,
                height: 12,
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
                width: 12,
                height: 12,
                borderRadius: "50%",
                marginRight: 8,
                backgroundColor: props.data.color,
            }}
        />
        {props.children}
    </components.SingleValue>
);

const DropDown: React.FC<SelectProps> = ({ options, onChange, defaultValue }) => {

    const textStyles = Object.fromEntries(Object.entries(TEXT_STYLES.TEXT_CAPTION_BOLD).map(([key, value]) => [key, value]));

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            width: 256,
            height: 40,
            border: `2px solid ${NEUTRAL_DARKSNOW}`,
            borderRadius: 12,
            cursor: `pointer`,
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
        singleValue: (provided: any) => ({
            ...provided,
            color: NEUTRAL_GRAY,
            display: "flex",
            alignItems: "center",
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
    };

    return (
        <Select
            options={options}
            onChange={onChange}
            defaultValue={defaultValue}
            styles={customStyles}
            components={{ Option: CircleOption, SingleValue: ColoredSingleValue }}
        />
    );
};

export default DropDown;