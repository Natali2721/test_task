import styled from 'styled-components';
import picture from 'images/picture.png';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background-color: ${p => p.theme.colors.accent};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

const HeaderContainer = styled.div`
  padding: 0 32px;
`;

const Container = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  color: hsl(269, 35%, 53%);
  padding-top: 32px;
  padding-bottom: 32px;
  margin: 10px auto;
`;
const HomeContainer = styled.div`
  padding-top: 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonDirection = styled.button`
  margin: 0 auto 20px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  color: hsl(257, 46%, 27%);
  background-color: ${p => p.theme.colors.accent};
  transition: transform 250ms linear;
  transition: background-color 250ms linear;
  &:hover {
    background-color: hsl(269, 35%, 73%);
    transform: scale(1.1);
  }
`;

const LinkBack = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  gap: 10px;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  gap: 10px;
`;

const SelectText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: hsl(257, 46%, 27%);
`;

const SelectInput = styled.select`
  width: 100px;
  border-radius: 4px;
  font-size: 14px;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

const ListItem = styled.li`
  width: 380px;
  text-align: center;
  text-transform: uppercase;
  background: ${p => p.theme.colors.cardBackground};
  box-shadow: ${p => p.theme.boxShadow.card};
  border-radius: ${p => p.theme.radii.card};
  &.none {
    display: none;
  }
`;

const AvatarBox = styled.div`
  position: relative;
  height: 222px;
  padding: 28px 36px 18px 36px;
  ::after {
    content: ' ';
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8px;
    width: 100%;
    background: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.boxShadow.avatarLine};
  }
`;

const PictureBox = styled.div`
  height: 168px;
  background-image: url(${picture});
  background-repeat: no-repeat;
  background-size: contain;
`;

const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

const Avatar = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  bottom: -36px;
  left: 150px;
  background: ${p => p.theme.colors.accent};
  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.5px #ae7be3, inset 0px 3.5px 2.5777px #fbf8ff;
`;

const AvatarImg = styled.img`
  background: ${p => p.theme.colors.cardBackground};
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

const ContentBox = styled.div`
  padding: 62px 36px 36px 36px;
`;

const Text = styled.p`
  color: ${p => p.theme.colors.accent};
  line-height: ${p => p.theme.lineHeight.card};
  text-transform: uppercase;
  :not(:last-of-type) {
    margin-bottom: 16px;
  }
  :last-of-type {
    margin-bottom: 26px;
  }
`;

const Button = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.bold};
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.button};
  cursor: pointer;
  box-shadow: ${p => p.theme.boxShadow.button};
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }
  &.active {
    background-color: ${p => p.theme.colors.buttonActiveBg};
  }
`;

const LoadButton = styled.button`
  align-self: center;
  padding: 8px 16px;
  max-width: fit-content;
  margin-top: 32px;
  border: none;
  border-radius: 8px;
  background-color: #3f51b5;
  color: white;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: background-color 250ms linear;
  transition: transform 250ms linear;
  &:hover {
    background-color: #303f9f;
    transform: scale(1.1);
  }
`;

export {
  Avatar,
  AvatarImg,
  Button,
  ButtonDirection,
  Header,
  HeaderContainer,
  HomeContainer,
  HomeTitle,
  LinkBack,
  List,
  ListItem,
  LoadButton,
  LoaderContainer,
  AvatarBox,
  LogoImg,
  Container,
  Text,
  PictureBox,
  SelectContainer,
  SelectInput,
  SelectText,
  ContentBox,
};
