import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Country } from "../types/Country";
import getCountries from "../api/getCountries";
import CountryCard from "./CountryCard";

const Container = styled.div`
  padding: 20px;
`;

const CountryGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        const sortedData = data.sort((a,b) => 
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedData);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelected = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) => selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);

      setCountries(
        countries.filter((selectedCountry: Country) => {
          return selectedCountry.name.common !== country.name.common;
        })
      );
    } else {
      
      setCountries([country ,...countries])

      setSelectedCountries(
        selectedCountries.filter((selectedCountry: Country) => {
          return selectedCountry.name.common !== country.name.common;
        })
      );
    }
  };

  return (
    <Container>
      <h1>좋아하는 나라</h1>
      <CountryGrid>
        {selectedCountries.map((country) => (
          <CountryCard
            key={country.ccn3}
            country={country}
            handleSelected={handleSelected}
          />
        ))}
      </CountryGrid>
      <h1>Countries</h1>
      <CountryGrid>
        {countries.map((country) => (
          <CountryCard
            key={country.ccn3}
            country={country}
            handleSelected={handleSelected}
          />
        ))}
      </CountryGrid>
    </Container>
  );
};

export default CountryList;
