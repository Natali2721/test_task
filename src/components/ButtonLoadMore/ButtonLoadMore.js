import PropTypes from 'prop-types';
import { LoadButton } from 'styles/Element.styled';

const ButtonLoadMore = ({ text, onClick }) => (
  <LoadButton type="button" onClick={onClick}>
    {text}
  </LoadButton>
);

ButtonLoadMore.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
