import React, {useEffect, useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import ArrowButton from "../UI_components/ArrowButton/ArrowButton";
import {NEUTRAL_SNOWWHITE, NEUTRAL_WHITE} from "../../Constants/Colors/Colors";

/**
 * @typedef {'auction' | 'creators'} Position - тип позиции слайдера.
 */

/**
 * @typedef {Object} SliderProps - пропсы для компонента Slider.
 * @property {number} cards - количество карточек.
 * @property {React.ReactNode} children - дочерние элементы.
 * @property {Position} position - позиция слайдера.
 * @property {number} cardContainer - ширина карточки в пикселях.
 */

interface SliderProps {
    cards: number;
    children: React.ReactNode;
    position: 'auction' | 'creators' | 'hotbid';
    cardContainer: number;
}

/**
 * @typedef {Object} SliderContentProps - пропсы для компонента SliderContent.
 * @property {number} translateValue - значение сдвига слайдера.
 * @property {Position} position - позиция слайдера.
 */

interface SliderContentProps {
    translateValue: number;
    position: 'auction' | 'creators' | 'hotbid';
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

const SliderWrapper = styled.div<{ position: 'auction' | 'creators' | 'hotbid'}>`
  display: flex;
  overflow: hidden;  
  position: relative;
  //width: 100%;
  justify-content: center;
  z-index: 1;  

  ${(props) => {
    if (props.position === 'auction') {
        return css`
        width: 100%;        
      `;
    } else if (props.position === 'creators') {
        return css`        
        margin: 0 auto;
        max-width: 100%;
        padding: 128px;
        background-color: ${NEUTRAL_WHITE};
      `;
    } else if (props.position === 'hotbid') {
        return css`
          background-color: ${NEUTRAL_SNOWWHITE};
        `;
    }
}
}
`;

const SliderContent = styled.div<SliderContentProps>`
  display: flex;  
  transition: transform .6s ease-out;
  transform: translateX(${(props) => props.translateValue}px);

  ${props => props.position === 'creators' ? css`
    margin-left: 80px;
    max-width: 1440px;
    gap: 32px;
  ` : ''}

  ${props => props.position === 'hotbid' ? css`
    
    max-width: 1120px;
    gap: 32px;
  ` : ''}

  > div {
    ${(props) => props.position === 'auction' && 'flex: 0 0 100%;'}
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

const ArrowContainer = styled.div<{ position: 'left' | 'right' | 'center' | 'hotbid' }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: absolute;
  bottom: 20px;
  z-index: 5;

  ${(props) => {
    if (props.position === 'left') {
      return css`
        left: 250px;
        top: 260px;        
      `;
    } else if (props.position === 'right') {
      return css`
        right: 250px;
        top: 260px;
      `;
    } else if (props.position === 'center') {
      return css`
        left: 60%;
        transform: translateX(-50%);
      `;
    } else if (props.position === 'hotbid') {
        return css`    
        left: 68%;
          bottom: 480px;
        transform: translateX(-50%);         
      `;}
  }};

  @media (max-width: 920px) {
    justify-content: center;
    align-items: center;
    left: initial;
    right: initial;
    ${(props) => props.position === 'center' && 'transform: none;'}
  }
`;



const ArrowBlock = styled.div<{ position: 'auction' | 'creators' | 'hotbid'}>`
    position: relative;
`;

const Slider = ({ cards, children, position, cardContainer }: SliderProps) => {
    const cardWidth = cardContainer;
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
        <>
            <SliderWrapper position={position}>
                {position === 'creators' &&
                    <ArrowContainer position={'left'}>
                        <ArrowButton
                            arrowDirection="left"
                            onClick={handlePrev}
                            disabled={isPrevDisabled}
                        />
                    </ArrowContainer>
                }
                <SliderContent translateValue={translateValue} position={position} >
                    {React.Children.map(children, (child, index) => (
                        <SliderCard isVisible={index >= currentIndex && index < currentIndex + visibleCards}>
                            {React.cloneElement(child as React.ReactElement<any>, )}
                        </SliderCard>
                    ))}
                </SliderContent>
                {position === 'auction' &&
                    <ArrowContainer position={'center'}>
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
                }
                {position === 'creators' &&
                    <ArrowContainer position={'right'}>
                        <ArrowButton
                            arrowDirection="right"
                            onClick={handleNext}
                            disabled={isNextDisabled}
                        />
                    </ArrowContainer>
                }
            </SliderWrapper>
            <ArrowBlock position={position}>
                {position === 'hotbid' &&
                    <ArrowContainer position={'hotbid'}>
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
                }
            </ArrowBlock>
        </>
    );
};

export default Slider;