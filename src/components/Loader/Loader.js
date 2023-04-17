import { ColorRing } from 'react-loader-spinner';
import { LoaderContainer } from 'styles/Element.styled';

const Loader = () => (
  <LoaderContainer>
    <ColorRing
      visible={true}
      height="160"
      width="160"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  </LoaderContainer>
);

export default Loader;
