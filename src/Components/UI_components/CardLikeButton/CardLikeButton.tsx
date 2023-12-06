import React, { useState } from "react";
import styled from "styled-components";
// @ts-ignore
import likeIconDefault from '../../../Images/Icons/card_like_image.png'
// @ts-ignore
import likeIconActive from '../../../Images/Icons/card_like_image_active.png'
import {NEUTRAL_SNOWWHITE} from "../../../Constants/Colors/Colors";

const LikeButton = styled.button`
  background-color: ${NEUTRAL_SNOWWHITE};
  box-shadow: 0 8px 16px -8px rgba(15, 15, 15, 0.20);
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 32px;
  width: 32px;
  height: 32px;
`;

const CardLikeButton: React.FC = () => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <LikeButton onClick={handleLikeClick}>
            {liked ? <img src={likeIconActive} alt={'like btn'}/> : <img src={likeIconDefault} alt={'like btn'}/>}
        </LikeButton>
    );
};

export default CardLikeButton;