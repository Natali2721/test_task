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

const Card = ({ id, tweets, avatar, initialFollowers, name }) => {
  const [followers, setFollowers] = useState(initialFollowers);
  //console.log(name);

  useEffect(() => {
    const storedFollowers = localStorage.getItem(`${id}`);
    if (storedFollowers) {
      setFollowers(parseInt(storedFollowers));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`${id}`, followers.toString());
  }, [followers, id]);

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
  //console.log(buttonStatus);

  return (
    <ListItem className={buttonStatus === name || name === 'all' ? '' : 'none'}>
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
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  initialFollowers: PropTypes.number.isRequired,
};

export default Card;
