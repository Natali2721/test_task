import styled from 'styled-components';
import picture from 'images/picture.png';

const Container = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
`;

const ListItem = styled.li`
  width: 380px;
  text-align: center;
  text-transform: uppercase;
  background: ${p => p.theme.colors.cardBackground};
  box-shadow: ${p => p.theme.boxShadow.card};
  border-radius: ${p => p.theme.radii.card};
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
  border-radius: 15px;
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
  &:hover {
    background-color: #303f9f;
  }
`;

export {
  Avatar,
  AvatarImg,
  Button,
  List,
  ListItem,
  LoadButton,
  AvatarBox,
  LogoImg,
  Container,
  Text,
  PictureBox,
  ContentBox,
};
