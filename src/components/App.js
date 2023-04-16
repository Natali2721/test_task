import React, { Fragment } from 'react';
import GlobalStyle from 'styles/globalStyles';
import CardList from './CardList/CardList';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import { Container } from 'styles/Element.styled';

const App = () => {
  const onClickLoadMore = () => {
    //setPage(prevState => prevState + 1);
    console.log('load');
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <CardList />
        <ButtonLoadMore text="Load More" onClick={onClickLoadMore} />
      </Container>
    </Fragment>
  );
};

export default App;
