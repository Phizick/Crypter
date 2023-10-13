import React, {useEffect, useState} from "react";
import arrowIcon from "../../../Images/Icons/arrow_icon_btn.png";
import loaderIcon from "../../../Images/Icons/loader.png";
import correctSearchIcon from "../../../Images/Icons/correct_search_icon.png";

/**
 * Хук для управления состоянием ввода.
 * @returns {{
 *  inputValue: string,
 *  isError: boolean,
 *  isLoading: boolean,
 *  isSuccess: boolean,
 *  disabledBtn: boolean,
 *  handleInputChange: Function,
 *  handleSubmit: Function,
 *  clearInput: Function,
 *  getButtonIcon: Function
 * }}
 */
export const useInputState = (): {
    inputValue: string;
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    disabledBtn: boolean;
    handleInputChange: Function;
    handleSubmit: Function;
    clearInput: Function;
    getButtonIcon: Function;
} => {
    const [inputValue, setInputValue] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [buttonState, setButtonState] = useState(1);
    const [disabledBtn, setDisabled] = useState(false);

    /**
     * Обработчик изменения значения в поле ввода.
     * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения значения в поле ввода.
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsError(false);
        setIsSuccess(false);
        setButtonState(1);
    };

    /**
     * Обработчик отправки формы.
     * @param {React.FormEvent} e - Событие отправки формы.
     */
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

    /**
     * Очистка поля ввода и сброс состояния ошибки и состояния кнопки.
     */
    const clearInput = () => {
        setInputValue("");
        setIsError(false);
        setButtonState(1);
    };

    useEffect(() => {
        setDisabled(isError);
    }, [isError]);

    /**
     * Возвращает иконку в зависимости от состояния кнопки.
     * @returns {string} - URL иконки.
     */
    const getButtonIcon = (): string => {
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