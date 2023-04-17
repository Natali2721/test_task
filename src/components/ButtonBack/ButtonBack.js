import { useLocation } from 'react-router-dom';
import { ButtonDirection, LinkBack } from 'styles/Element.styled';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const BackButton = () => {
  const location = useLocation();

  return (
    <ButtonDirection type="button">
      <LinkBack to={location.state?.from ?? '/'}>
        <HiArrowNarrowLeft size={16} />
        Go back
      </LinkBack>
    </ButtonDirection>
  );
};

export default BackButton;
