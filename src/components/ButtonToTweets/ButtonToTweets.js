import { useLocation } from 'react-router-dom';
import { ButtonDirection, LinkBack } from 'styles/Element.styled';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ButtonToTweets = () => {
  const location = useLocation();

  return (
    <ButtonDirection type="button">
      <LinkBack to={location.state?.from ?? '/tweets'}>
        Go to tweets
        <HiArrowNarrowRight size={16} />
      </LinkBack>
    </ButtonDirection>
  );
};

export default ButtonToTweets;
