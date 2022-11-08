import React, { useState } from "react";
import Header from "../components/Mobile/Header";
import Navigation from "../components/Mobile/Navigation";
import Planets from "../components/Mobile/Planets";
import data from "../data.json";
import styled from "styled-components";

const PageMobile = ({ section, setSection }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <Container>
      <Header hidden={hidden} setHidden={setHidden} />
      {hidden ? (
        <Navigation data={data} setHidden={setHidden} />
      ) : (
        <Planets data={data} section={section} setSection={setSection} />
      )}
    </Container>
  );
};

export default PageMobile;

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
