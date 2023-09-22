import React, {useEffect, useState} from "react";
import styled from "styled-components";

interface CarouselProps {
    slides: JSX.Element[];
}

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;  
  max-width: 1140px;
  margin: 0 auto;
  transition: max-width .5s ease;
  
  @media (max-width: 1210px) {
    max-width: 1024px;
  }
  
  @media (max-width: 1090px) {
    max-width: 980px;
  }

  @media (max-width: 820px) {
    max-width: 530px;
  }
`;

const SlidesContainer = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform .7s ease;
  transform: translateX(${(props) => props.translateX}px);
  max-width: 1140px;

  @media (max-width: 1150px) {
    max-width: 1024px;
  }

  @media (max-width: 1024px) {
    max-width: 980px;
  }

  @media (max-width: 820px) {
    max-width: 530px;
  }
  
  @media (max-width: 400px) {
    max-width: 325px;
  }
`;


const Slide = styled.div`
  flex: 0 0 100%;
  
  @media (max-width: 540px) {
    max-width: 100%;
  }  
`;

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [stepSize, setStepSize] = useState(1140);

    const handleResize = () => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth;
            if (width <= 382) {
                setStepSize(325);
            } else if (width <= 1050) {
                setStepSize(1020);
            } else {
                setStepSize(1140);
            }
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const nextSlide = () => {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        setCurrentSlideIndex(nextIndex);
        setTranslateX(-nextIndex * stepSize);
    };

    const prevSlide = () => {
        const prevIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
        setCurrentSlideIndex(prevIndex);
        setTranslateX(-prevIndex * stepSize);
    };

    return (
        <CarouselContainer>
            <SlidesContainer translateX={translateX}>
                {slides.map((slide, index) => (
                    <Slide key={index}>{React.cloneElement(slide, { leftArrow: prevSlide, rightArrow: nextSlide })}</Slide>
                ))}
            </SlidesContainer>
        </CarouselContainer>
    );
};

export default Carousel;

