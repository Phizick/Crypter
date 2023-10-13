import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {NEUTRAL_DARKSNOW, NEUTRAL_LIGHTGRAY, NEUTRAL_SNOWWHITE} from "../../Constants/Colors/Colors";
import {HEADLINERS_STYLES, TEXT_STYLES} from "../../Constants/Typography/Typography";

/**
 * @typedef {Object} PriceTimerProps - Пропсы компонента PriceTimer
 * @property {number} time - Время аукциона в секундах
 * @property {number} price - Текущая ставка
 */

interface PriceTimerProps {
    time: number;
    price: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;  
  box-shadow: 0 64px 64px -48px rgba(31, 47, 70, 0.12);
  border: 2px solid ${NEUTRAL_DARKSNOW};
  border-radius: 24px;
  background: ${NEUTRAL_SNOWWHITE};
  
`;

const Title = styled.h2`
  ${Object.entries(TEXT_STYLES.TEXT_LINKS).map(([key, value]) => `${key}: ${value};`).join('\n')};
  margin: 0;
`;

const Price = styled.p`
  ${Object.entries(HEADLINERS_STYLES.HEADLINE_SECOND).map(([key, value]) => `${key}: ${value};`).join('\n')};
  margin: 0;
`;

const Conversion = styled.p`
  ${Object.entries(TEXT_STYLES.TEXT_BOLD).map(([key, value]) => `${key}: ${value};`).join('\n')};
  color: ${NEUTRAL_LIGHTGRAY};
  margin: 0;
`;

const TimerTitle = styled.h3`
  ${Object.entries(TEXT_STYLES.TEXT_LINKS).map(([key, value]) => `${key}: ${value};`).join('\n')};
  margin-top: 24px;
  margin-bottom: 8px;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const TimerValue = styled.span`
  ${Object.entries(HEADLINERS_STYLES.HEADLINE_FOURTH).map(([key, value]) => `${key}: ${value};`).join('\n')};
`;

const TimerLabel = styled.span`
  ${Object.entries(TEXT_STYLES.TEXT_LINKS).map(([key, value]) => `${key}: ${value};`).join('\n')};
  color: ${NEUTRAL_LIGHTGRAY};
`;


/**
 * @description Компонент, отображающий информацию о текущей ставке, цене, конвертированной цене и таймере для аукциона
 * @param {PriceTimerProps} props - Пропсы компонента
 * @returns {JSX.Element} - Возвращает JSX-элемент
 */
const BidItem: React.FC<PriceTimerProps> = ({time, price}: PriceTimerProps): JSX.Element => {
    // хранение оставшегося времени аукциона
    const [remainingTime, setRemainingTime] = useState<number>(time);

    // обновление оставшегося времени каждую секунду
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        // сброс интервала при анмаунте компонента
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    /**
     * @description Форматирование времени в формат "чч:мм:сс"
     * @param {number} time - Время в секундах
     * @returns {string} - Отформатированное время в формате "чч:мм:сс"
     */
    const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    /**
     * @description Конвертирование цены в рубли по заданному курсу
     * @param {number} price - Цена в долларах
     * @returns {string} - Конвертированная цена в формате "X XXX XXX,XX ₽"
     */
    const convertPriceToRub = (price: number): string => {
        const exchangeRate = 92;
        const convertedPrice = price * exchangeRate;
        return convertedPrice.toLocaleString('ru-RU');
    };

    return (
        <Container>
            <Title>Current Bid</Title>
            <Price>$ {price.toLocaleString()}</Price>
            <Conversion>{convertPriceToRub(price)} ₽</Conversion>
            <TimerTitle>Auction ending in</TimerTitle>
            <TimerContainer>
                <Column>
                    <TimerValue>{formatTime(remainingTime).split(':')[0]}</TimerValue>
                    <TimerLabel>Hrs</TimerLabel>
                </Column>
                <Column>
                    <TimerValue>{formatTime(remainingTime).split(':')[1]}</TimerValue>
                    <TimerLabel>mins</TimerLabel>
                </Column>
                <Column>
                    <TimerValue>{formatTime(remainingTime).split(':')[2]}</TimerValue>
                    <TimerLabel>secs</TimerLabel>
                </Column>
            </TimerContainer>
        </Container>
    );
};

export default BidItem;