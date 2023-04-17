import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import QUANTITY from 'constans/limit';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Loader from 'components/Loader/Loader';
import { fetchAllUsers, fetchUsers } from 'Api/apiService';
import { Container, SelectContainer, SelectText } from 'styles/Element.styled';
import CardList from 'components/CardList/CardList';
import BackButton from 'components/ButtonBack/ButtonBack';
import Select from 'react-select';
import options from 'constans/selectOptions';

const Tweets = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    if (isActive === true) {
      const update = async () => {
        setIsLoading(true);
        try {
          await fetchUsers(page).then(res => {
            if (!res.data.length) {
              setIsActive(false);
              return Notiflix.Notify.failure(
                'Sorry, there isn`t any tweets yet'
              );
            }
            if (res.data.length < QUANTITY) {
              setIsActive(false);
            }
            setItems(prevState => [...prevState, ...res.data]);
            setIsLoading(false);
          });
        } catch (error) {
          console.log('Error');
        } finally {
          setIsLoading(false);
        }
      };
      update();
    }
  }, [page, isActive]);

  useEffect(() => {
    if (selectedOption.value !== 'all') {
      const update = async () => {
        setIsLoading(true);
        try {
          await fetchAllUsers().then(res => {
            if (!res.data.length) {
              setIsActive(false);
              return Notiflix.Notify.failure(
                'Sorry, there isn`t any tweets yet'
              );
            }
            setItems(res.data);
            setIsLoading(false);
            setIsActive(false);
          });
        } catch (error) {
          console.log('Error');
        } finally {
          setIsLoading(false);
        }
      };
      update();
    }
    if (selectedOption.value === 'all') {
      setIsActive(true);
      setItems([]);
      setPage(1);
    }
  }, [selectedOption]);

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <BackButton />
      <SelectContainer>
        <SelectText>You can select tweets </SelectText>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </SelectContainer>

      {isLoading && <Loader />}
      <CardList selectedOption={selectedOption} users={items} />
      {isActive && (
        <ButtonLoadMore text="Load More" onClick={onClickLoadMore} />
      )}
    </Container>
  );
};

export default Tweets;
