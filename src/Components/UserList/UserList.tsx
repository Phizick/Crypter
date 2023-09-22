import React from "react";
import styled from "styled-components";
import {
    NEUTRAL_GRAY,
    PRIMARY_GREEN,
    PRIMARY_PINK,
    SECONDARY_VIOLET,
    SECONDARY_YELLOW
} from "../../Constants/Colors/Colors";
import UserMiniProfile from "../UserMiniProfile/UserMiniProfile";
import avatar1 from '../../Images/Avatars/avatar.png'
import avatar2 from '../../Images/Avatars/avatar_5.png'
import avatar3 from '../../Images/Avatars/avatar_6.png'

const ListTitle = styled.h2`
  border-left: 2px solid ${NEUTRAL_GRAY};
  color: ${NEUTRAL_GRAY};
  margin-left: 10px;
  padding-left: 10px;
`;


const ListItem = styled.div`
  border-top: 1px solid ${NEUTRAL_GRAY};
  display: flex;
  align-items: center;
  padding: 10px;
`;


const ListContainer = styled.div`
  margin-top: 20px;
`;


const List: React.FC = () => {
    return (
        <ListContainer>
            <ListTitle>List Title</ListTitle>
            <ListItem>
                <UserMiniProfile bid={120} avatarUrl={avatar1} backgroundColor={PRIMARY_PINK} name={'Bob Jayson'} lvl={1}/>
            </ListItem>
            <ListItem>
                <UserMiniProfile bid={120} avatarUrl={avatar2} backgroundColor={PRIMARY_GREEN} name={'Ruby Python'} lvl={5}/>
            </ListItem>
            <ListItem>
                <UserMiniProfile bid={120} avatarUrl={avatar3} backgroundColor={SECONDARY_YELLOW} name={'Bob Jayson'} lvl={7}/>
            </ListItem>
            <ListItem>
                <UserMiniProfile bid={120} avatarUrl={avatar2} backgroundColor={SECONDARY_VIOLET} name={'Bob Jayson'} lvl={2}/>
            </ListItem>
        </ListContainer>
    );
};

export default List;