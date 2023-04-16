import React from 'react';
import Card from 'components/Card/Card';
import users from 'data/users';
import { List } from 'styles/Element.styled';
//import { fetchUsers } from 'Api/apiService';

const CardList = () => {
  return (
    <List>
      {users &&
        users.map(({ avatar, user, id, tweets, followers }) => (
          <Card
            key={id}
            user={user}
            tweets={tweets}
            initialFollowers={followers}
            avatar={avatar}
          />
        ))}
    </List>
  );
};

export default CardList;
