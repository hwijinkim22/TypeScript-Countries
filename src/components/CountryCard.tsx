import React from "react";
import { Country } from "../types/Country";
import styled from "styled-components";

const CountryItem = styled.li`
  flex: 0 0 33.3333%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  border: 1px solid black;

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
  }

  img {
    width: 100px;
    height: auto;
  }
`;

interface CountryCardProps {
  country: Country;
  handleSelected: (country : Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, handleSelected }) => {
  return (
    <CountryItem onClick={() => handleSelected(country)}>
      <h3>{country.name.common}</h3>
      <p>{country.region}</p>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
    </CountryItem>
  );
};

export default CountryCard;
