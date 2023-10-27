import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import footerLogo from '../../Images/Logo/logo_horizontal_white.png'
import InputSingle from "../UI_components/InputField/InputSingle/InputSingle";
import {TEXT_STYLES} from "../../Constants/Typography/Typography";
import {NEUTRAL_GRAY, NEUTRAL_LIGHTGRAY} from "../../Constants/Colors/Colors";

const FooterContainer = styled.footer`
  padding: 20px;
  max-width: 1120px;
  margin: 0 auto;
  transition: padding .6s ease;

  @media (max-width: 1070px) {
    padding: 20px 80px;
  }

  @media (max-width: 380px) {
    padding: 20px 32px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  border-bottom: 1px solid rgba(${NEUTRAL_LIGHTGRAY.slice(4, -1)}, .2);;
  padding-bottom: 48px;

  @media (max-width: 823px) {
    grid-template-columns: 1fr;
  }
`;

const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  align-self: flex-start;
  margin-left: -65px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 823px) {
    border-bottom: 2px solid rgba(${NEUTRAL_LIGHTGRAY.slice(4, -1)}, .2);
    padding-bottom: 32px;
    margin-top: 32px;
  }

  a {
    text-decoration: none;
    color: ${NEUTRAL_LIGHTGRAY};
    ${Object.entries(TEXT_STYLES.TEXT_BUTTON_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')};
    transition: .5s ease;

    &:hover {
      color: ${NEUTRAL_GRAY};
    }
  }
`;

const Title = styled.h4`
  margin: 0;
  color: ${NEUTRAL_GRAY};
  ${Object.entries(TEXT_STYLES.TEXT_LINKS).map(([key, value]) => `${key}: ${value};`).join('\n')};

  @media (max-width: 823px) {
    align-self: flex-start;
  }
`;

const FooterLogoText = styled.p`
  ${Object.entries(TEXT_STYLES.TEXT_BIG).map(([key, value]) => `${key}: ${value};`).join('\n')};
  margin: 0;
`;

const FooterText = styled.p`
  margin: 0;
  color: ${NEUTRAL_GRAY};
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION).map(([key, value]) => `${key}: ${value};`).join('\n')};
`;

const FooterAbout = styled.div`
  color: ${NEUTRAL_GRAY};
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')};
  padding: 32px 0;
`;

const columnFirstLinks = ['Discover', 'Connect wallet', 'Create item'];
const columnSecondLinks = ['Download', 'Demos', 'Support'];

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LogoColumn>
                    <Logo src={footerLogo} alt='Logo' />
                    <FooterLogoText>The New Creative Economy.</FooterLogoText>
                </LogoColumn>
                <Column>
                    <Title>Crypter.</Title>
                    {columnFirstLinks.map((link, index) => (
                        <a key={index} href={link}>{link}</a>
                    ))}
                </Column>
                <Column>
                    <Title>Info</Title>
                    {columnSecondLinks.map((link, index) => (
                        <a key={index} href={link}>{link}</a>
                    ))}
                </Column>
                <Column>
                    <Title>Join Newsletter</Title>
                    <FooterText>Subscribe to our newsletter to receive more free design courses and resources.</FooterText>
                    <InputSingle placeholder='Enter your email' />
                </Column>
            </FooterContent>
            <FooterAbout>We use cookies for better service. Powered by Denis Kraev aka Phizick</FooterAbout>
        </FooterContainer>
    );
}

export default Footer;