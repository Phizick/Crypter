import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import mainLogo from '../../Images/Logo/logo_horizontal_white.png'
import Button from "../UI_components/Button/Button";
import SearchInput from "../UI_components/SearchInput/SearchInput";
import {NEUTRAL_GRAY, NEUTRAL_LIGHTGRAY, NEUTRAL_SNOWWHITE} from "../../Constants/Colors/Colors";
import {TEXT_STYLES} from "../../Constants/Typography/Typography";


const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;  
  background-color: ${NEUTRAL_SNOWWHITE};  
  width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid rgba(${NEUTRAL_LIGHTGRAY.slice(4, -1)}, .2);

  @media (max-width: 750px) {
    justify-content: flex-start;
  }  
`;

const Logo = styled.img`  
  margin-right: 10px;  
`;

const NavLinks = styled.div`
  display: flex;  
  padding-left: 10px;
  margin-left: 5px;
  gap: 32px;
  border-left: 2px solid rgba(${NEUTRAL_LIGHTGRAY.slice(4, -1)}, .2);
  transition: opacity .5s ease;  

  @media (max-width: 1040px) {       
    animation: fadeOut 1s ease forwards;

    @keyframes fadeOut {
      100% {
        opacity: 0;
        display: none;
      }
  }
`;

const NavLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: ${NEUTRAL_LIGHTGRAY};
  font-weight: bold;
  transition: .5s;
  ${Object.entries(TEXT_STYLES.TEXT_BUTTON_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')}

  &:hover {
    color: ${NEUTRAL_GRAY};
    cursor: pointer;
  }
`;

const NavbarMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: opacity .5s ease;
  gap: 15px;

  @media (max-width: 750px) {
    animation: fadeOut 1s ease forwards;

    @keyframes fadeOut {
      100% {
        opacity: 0;
        display: none;
      }
    }
`;

const LogoItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const onChange = () => {
    console.log(1)
}

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <LogoItems>
                <Logo src={mainLogo} alt={'logo'} />
                <NavLinks>
                    <NavLink href="/">Discover</NavLink>
                    <NavLink href="/">How it work</NavLink>
                </NavLinks>
            </LogoItems>
            <NavbarMedia>
                <SearchInput onChange={onChange}/>
                <Button label={'Upload'} theme={'white'} size={'small'} state={'enabled'} property={'neutral'}/>
                <Button label={'Connect Wallet'} theme={'white'} size={'small'} state={'enabled'} property={'light'}/>
            </NavbarMedia>
        </NavbarContainer>
    );
};

export default Navbar;