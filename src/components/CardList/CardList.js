import React from 'react';
import Card from 'components/Card/Card';
import { List } from 'styles/Element.styled';

const CardList = ({ users, selectedOption }) => {
  return (
    <List>
      {users &&
        users.map(({ avatar, id, tweets, followers }) => (
          <Card
            id={id}
            key={id}
            tweets={tweets}
            initialFollowers={followers}
            avatar={avatar}
            name={selectedOption.value}
          />
        ))}
    </List>
  );
};

export default CardList;
