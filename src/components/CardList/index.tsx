import React from 'react';
import styled from 'styled-components';
import { Monster } from '../../models';

const List = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

function CardItem({ monster: { id, name, email } }: { monster: Monster }) {
  return (
    <Card>
      <img
        src={`https://robohash.org/${id + 40}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </Card>
  );
}

export default function CardList({ monsterArr }: { monsterArr: Monster[] }) {
  return (
    <List>
      {monsterArr.map((monster) => (
        <CardItem key={monster.id} monster={monster} />
      ))}
    </List>
  );
}
