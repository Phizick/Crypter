import React, {useEffect, useState} from "react";
import arrowIcon from "../../../Images/Icons/arrow_icon_btn.png";
import loaderIcon from "../../../Images/Icons/loader.png";
import correctSearchIcon from "../../../Images/Icons/correct_search_icon.png";

export const useInputState = () => {
    const [inputValue, setInputValue] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [buttonState, setButtonState] = useState(1);
    const [disabledBtn, setDisabled] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsError(false);
        setIsSuccess(false);
        setButtonState(1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setButtonState(3);

        if (inputValue === "" || !inputValue.includes("@")) {
            setIsError(true);
            return;
        }
        setIsLoading(true);

        // вызов api
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 2000);
    };

    const clearInput = () => {
        setInputValue("");
        setIsError(false);
        setButtonState(1);
    };

    useEffect(() => {
        setDisabled(isError);
    }, [isError]);

    const getButtonIcon = () => {
        switch (buttonState) {
            case 1:
                return arrowIcon;
            case 2:
                return loaderIcon;
            case 3:
                return correctSearchIcon;
            default:
                return arrowIcon;
        }
    };

    return {
        inputValue,
        isError,
        isLoading,
        isSuccess,
        disabledBtn,
        handleInputChange,
        handleSubmit,
        clearInput,
        getButtonIcon,
    };
};