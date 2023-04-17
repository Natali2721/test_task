import Navigation from 'components/Navigation/Navigation';
import { Header, HeaderContainer } from 'styles/Element.styled';

export const AppBar = () => {
  return (
    <HeaderContainer>
      <Header>
        <Navigation />
      </Header>
    </HeaderContainer>
  );
};
