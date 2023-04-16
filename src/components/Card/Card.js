import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from 'images/logo.png';
import {
  ContentBox,
  ListItem,
  AvatarBox,
  LogoImg,
  PictureBox,
  Text,
  AvatarImg,
  Avatar,
  Button,
} from 'styles/Element.styled';

const Card = ({ user, tweets, avatar, initialFollowers }) => {
  const storedFollowers = localStorage.getItem(`${user}Followers`);

  const [followers, setFollowers] = useState(
    storedFollowers || initialFollowers
  );

  useEffect(() => {
    const storedFollowers = localStorage.getItem(`${user}Followers`);
    if (storedFollowers) {
      setFollowers(parseInt(storedFollowers));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem(`${user}Followers`, followers.toString());
  }, [followers, user]);

  const getFollowers = followers => {
    if (followers > 999) {
      const str = followers.toString();
      return str.slice(0, -3) + ',' + str.slice(-3);
    } else {
      return followers;
    }
  };

  const getButtonStatus = followers => {
    return followers === initialFollowers ? 'follow' : 'following';
  };

  const handleClick = () => {
    if (followers === initialFollowers) {
      setFollowers(prevState => prevState + 1);
    } else {
      setFollowers(prevState => prevState - 1);
    }
  };

  const buttonStatus = getButtonStatus(followers);

  return (
    <ListItem>
      <AvatarBox>
        <PictureBox />
        <LogoImg src={Logo} alt="Logo" width="76px" height="22px" />
        <Avatar>
          <AvatarImg
            src={avatar}
            alt="Avatar"
            width="62px"
            height="62px"
          ></AvatarImg>
        </Avatar>
      </AvatarBox>
      <ContentBox>
        <Text>{tweets} tweets</Text>
        <Text>{getFollowers(followers)} followers</Text>
        <Button
          onClick={handleClick}
          name={buttonStatus}
          className={buttonStatus === 'follow' ? '' : 'active'}
        >
          {buttonStatus}
        </Button>
      </ContentBox>
    </ListItem>
  );
};

Card.propTypes = {
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  initialFollowers: PropTypes.number.isRequired,
};

export default Card;
