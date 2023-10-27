import React from 'react';
import styled from 'styled-components';
import Label from "../UI_components/Label/Label";
import {TEXT_STYLES} from "../../Constants/Typography/Typography";

type GalleryProps = {
    images: string[];
    title: string;
    author: string;
    avatar: string;
    itemsCount: number;
}

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 352px;
`;

const MainImage = styled.img`
  height: 240px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 3px;
  object-fit: cover;
`;

const ThumbnailImages = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const ThumbnailImage = styled.img`
  height: 75px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const Title = styled.h2`
  margin: 16px 0 8px 0;
  ${Object.entries(TEXT_STYLES.TEXT_BOLD).map(([key, value]) => `${key}: ${value};`).join('\n')}
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;  
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_BOLD).map(([key, value]) => `${key}: ${value};`).join('\n')}
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  height: 24px;
  width: 24px;
`;


const HotCollection: React.FC<GalleryProps> = ({ images, title, author, avatar, itemsCount }) => {
    return (
        <GalleryContainer>
            <MainImage src={images[0]} />
            <ThumbnailImages>
                <ThumbnailImage src={images[1]} />
                <ThumbnailImage src={images[2]} />
                <ThumbnailImage src={images[3]} />
            </ThumbnailImages>
            <Title>{title}</Title>
            <MetaInfo>
                <AuthorInfo>
                    <Avatar src={avatar} width={40} height={40} />
                    {author}
                </AuthorInfo>
                <Label color={'black'} state={'ghost'} payload={`${itemsCount} items`}/>
            </MetaInfo>
        </GalleryContainer>
    );
};

export default HotCollection;