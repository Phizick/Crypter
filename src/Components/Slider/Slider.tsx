import React, {useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import ArrowButton from "../UI_components/ArrowButton/ArrowButton";

interface SliderProps {
    cards: number;
    children: React.ReactNode;
}

interface SliderContentProps {
    translateValue: number;
}

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  justify-content: center;  
  z-index: 1;
  max-width: 100%;
`;

const SliderContent = styled.div<SliderContentProps>`  
  display: flex;
  transition: transform .6s ease-out;
  transform: translateX(${(props) => props.translateValue}px);

  > div {
    flex: 0 0 100%;
    animation: ${slideIn} .5s ease-in-out;
    &:nth-child(2) {
      animation-delay: .25s;
    }
    &:nth-child(3) {
      animation-delay: .5s;
    }
  }
`;

const SliderCard = styled.div<{ isVisible: boolean }>`
  width: 300px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity .5s ease-in-out;
  animation: ${(props) => (props.isVisible ? undefined : slideOut)} .5s ease-in-out forwards;
`;

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: absolute;
  bottom: 20px;
  right: 600px;
  
  @media (max-width: 920px) {    
    justify-content: center;
    align-items: center;
  }
`;

const Slider = ({ cards, children }: SliderProps) => {
    const cardWidth = 1800;
    const visibleCards = Math.floor(cards);
    const totalCards = React.Children.count(children);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        setIsPrevDisabled(currentIndex === 0);
        setIsNextDisabled(currentIndex === totalCards - visibleCards);
    }, [currentIndex, totalCards, visibleCards]);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < totalCards - visibleCards) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const translateValue = -currentIndex * cardWidth;

    return (
        <SliderWrapper>
            <SliderContent translateValue={translateValue}>
                {React.Children.map(children, (child, index) => (
                    <SliderCard isVisible={index >= currentIndex && index < currentIndex + visibleCards}>
                        {React.cloneElement(child as React.ReactElement<any>, )}
                    </SliderCard>
                ))}
            </SliderContent>
            <ArrowContainer>
                <ArrowButton
                    arrowDirection="left"
                    onClick={handlePrev}
                    disabled={isPrevDisabled}
                />
                <ArrowButton
                    arrowDirection="right"
                    onClick={handleNext}
                    disabled={isNextDisabled}
                />
            </ArrowContainer>
        </SliderWrapper>
    );
};

export default Slider;