import React from "react";
import styled from "styled-components";
import HeaderTablet from "../components/Tablet/HeaderTablet";
import PlanetsTablet from "../components/Tablet/PlanetsTablet";
import data from "../data.json";

const pageTablet = ({ section, setSection }) => {
  return (
    <Container>
      <HeaderTablet data={data} />
      <PlanetsTablet data={data} section={section} setSection={setSection} />
    </Container>
  );
};

export default pageTablet;

const Container = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
