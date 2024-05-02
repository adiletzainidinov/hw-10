import React from 'react';
import styled from 'styled-components';

const Card = ({ img, title, onClick }) => {
  return (
    <>
      <CardPapa>
        <img
          style={{ height: '250px', width: '300px' }}
          src={img}
          alt={title}
        />
        <h1 style={{ textAlign: 'center', marginTop: '10px' }}>{title}</h1>
        <ButtonAdd onClick={onClick}>Added</ButtonAdd>
      </CardPapa>
    </>
  );
};

export default Card;

const CardPapa = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
`;
const ButtonAdd = styled.button`
  padding: 15px 60px;
  font-size: 20px;
  color: white;
  background-color: #7ee47e;
  border: none;
  border-radius: 7px;
  margin-left: 60px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #a2e6a2;
  }
  &:active {
    background-color: #31da31;
  }
`;
