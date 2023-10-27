/**
 * Компонент Feed представляет собой блок с информацией о товаре.
 *
 * @component
 * @param {Props} props - Свойства компонента.
 * @return {JSX.Element} - Возвращает разметку блока с информацией о товаре.
 */

import React, {useState} from 'react';
import styled from 'styled-components';
import Label from "../UI_components/Label/Label";
import Button from "../UI_components/Button/Button";
import {TEXT_STYLES} from "../../Constants/Typography/Typography";
import {NEUTRAL_LIGHTGRAY} from "../../Constants/Colors/Colors";

type Props = {
    size: 'big' | 'small'; // размер фрейма. Может быть "big" или "small".
    imageURL: string; // URL-адрес изображения
    title: string; // заголовок фрейма
    author: string; // автор фрейма
    authorAvatar: string; // URL-адрес аватарки автора
    price: string; // цена фрейма
    stock: string; // кол-во
};

const StyledImage = styled.img<{ scale: boolean; size: 'big' | 'small' }>`
  width: 100%;
  height: 100%;
  transform: ${props => (props.scale ? 'scale(1.2)' : 'none')};
  transition: transform .5s;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const InfoContainer = styled.div<{ size: 'big' | 'small' }>`
  display: flex;
  flex-flow: ${props => (props.size === 'big' ? 'row wrap' : 'column nowrap')};
  align-items: center;
  margin-bottom: ${props => (props.size === 'big' ? '20px' : '0')};
`;

const StyledInfo = styled.div<{ size: 'big' | 'small' }>`
  display: flex;
  flex-flow: ${props => (props.size === 'big' ? 'row wrap' : 'column nowrap')};
  //align-items: center;
  margin-left: ${props => (props.size === 'big' ? '0' : '20px')};
  gap: 9px;

  & > :last-child {
    margin-top: 15px;
  }
`;


const AuthorAvatar = styled.img<{size: 'big' | 'small'}>`
  width: ${props => (props.size === 'big' ? '48px' : '24px')};
  height: ${props => (props.size === 'big' ? '48px' : '24px')};
  border-radius: 50%;
`;

const ImageContainer = styled.div<{size: 'big' | 'small'}>`
  overflow: hidden;
  border-radius: 12px;
  width: ${props => (props.size === 'big' ? '448px' : '160px')};
  height: ${props => (props.size === 'big' ? '432px' : '148px')};
`;

const ContentContainer = styled.div<{ size: 'big' | 'small' }>`
  display: flex;
  flex-flow: ${props => (props.size === 'big' ? 'column nowrap' : 'row wrap')};
`;

const ItemTitle = styled.p<{ size: 'big' | 'small' }>`
  ${props => props.size === 'big' && Object.entries(TEXT_STYLES.TEXT_BOLD).map(([key, value]) => ` ${key}: ${value};`).join('\n')};
  ${props => props.size === 'small' && Object.entries(TEXT_STYLES.TEXT_LINKS).map(([key, value]) => ` ${key}: ${value};`).join('\n')};
  margin: 0;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11px;
`;

const ArticleContainer = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 448px;
  margin-top: 24px;
`;

const StockCount = styled.p`
    margin: 0;
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION).map(([key, value]) => `${key}: ${value};`).join('\n')};
  color: ${NEUTRAL_LIGHTGRAY};

`;

const Feed: React.FC<Props> = ({
                                   size,
                                   imageURL,
                                   title,
                                   author,
                                   authorAvatar,
                                   price,
    stock,
                               }) => {
    const [hover, setHover] = useState(false);

    return (
        <ContentContainer size={size}>
            <ImageContainer size={size}>
                <StyledImage
                    src={imageURL}
                    alt={title}
                    size={size}
                    scale={hover && size === 'big'}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                />
            </ImageContainer>
            <InfoContainer size={size}>
                {'big' === size ? (
                    <ArticleContainer>
                        <AuthorAvatar src={authorAvatar} alt={author} size={size}/>
                        <ItemTitle size={size}>{title}</ItemTitle>
                        <p>{author}</p>
                        <Label color={'green'} state={'ghost'} payload={price}/>
                    </ArticleContainer>
                ) : (
                    <StyledInfo size={size}>
                            <ItemTitle size={size}>{title}</ItemTitle>
                        <LabelContainer>
                            <AuthorAvatar src={authorAvatar} alt={author} size={size}/>
                            <Label color={'green'} state={'ghost'} payload={price}/>
                            <StockCount>{stock}</StockCount>
                        </LabelContainer>
                        <Button label={'Place a bid'} property={'light'} size={'small'} state={'enabled'} theme={'white'}/>
                    </StyledInfo>
                )}
            </InfoContainer>
        </ContentContainer>
    );
};

export default Feed