import React from 'react';
import styled from 'styled-components';
import Button from "../UI_components/Button/Button";
import {HEADLINERS_STYLES, TEXT_STYLES} from "../../Constants/Typography/Typography";
import {NEUTRAL_LIGHTGRAY} from "../../Constants/Colors/Colors";


const PreFooterContainer = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 100%;
  padding: 80px 0;
  border-bottom: 1px solid rgba(${NEUTRAL_LIGHTGRAY.slice(4, -1)}, .2);;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LargeText = styled.p`
  ${Object.entries(HEADLINERS_STYLES.HEADLINE_FIRST).map(([key, value]) => `${key}: ${value};`).join('\n')}
  white-space: wrap;
  max-width: 545px;
  margin: 12px 0 20px 0;
`;

const MediumText = styled.p`  
  ${Object.entries(TEXT_STYLES.TEXT_HAIRLINE_LARGE).map(([key, value]) => `${key}: ${value};`).join('\n')}
  color: ${NEUTRAL_LIGHTGRAY};
`;

const SmallText = styled.p`
  ${Object.entries(TEXT_STYLES.TEXT_NORMAL).map(([key, value]) => `${key}: ${value};`).join('\n')}
  color: ${NEUTRAL_LIGHTGRAY};
`;

const ImageContainer = styled.img`
  max-width: 640px;
  max-height: 640px;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
  gap: 16px;
  margin-top: 40px;
`;

interface PreFooterProps {
    largeText: string;
    mediumText: string;
    smallText: string;
    imageUrl: string;
}

const PreFooter: React.FC<PreFooterProps> = ({ largeText, mediumText, smallText, imageUrl }) => (
    <PreFooterContainer>
        <ContentContainer>
            <MediumText>{mediumText}</MediumText>
            <LargeText>{largeText}</LargeText>
            <SmallText>{smallText}</SmallText>
            <ButtonContainer>
                <Button label={'Earn now'} theme={'white'} size={'medium'} state={'enabled'} property={'neutral'}/>
                <Button label={'Discover more'} theme={'dark'} size={'medium'} state={'enabled'} property={'light'}/>
            </ButtonContainer>
        </ContentContainer>

        <ImageContainer src={imageUrl} alt="Prefooter image" />
    </PreFooterContainer>
);

export default PreFooter;