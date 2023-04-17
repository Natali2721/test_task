import ButtonToTweets from 'components/ButtonToTweets/ButtonToTweets';
import { HomeContainer, HomeTitle } from 'styles/Element.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to TWEETSworld!</HomeTitle>
      <ButtonToTweets />
    </HomeContainer>
  );
};

export default Home;
