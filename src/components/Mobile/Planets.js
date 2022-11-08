import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { returnInfoPath, returnImgPath, getColor } from "../helperFunctions";
import {
  Name,
  Content,
  Source,
  DetailsTitle,
  DetailsValue,
  SourceLink,
  StyledSourceSVG,
} from "../planets.styled";

const Planets = ({ data, section, setSection }) => {
  const { planetName } = useParams();

  const planet = data.filter((el) => {
    return planetName ? el.name === planetName : data;
  });

  return (
    <Container>
      <Sections>
        <Section
          onClick={() => setSection("overview")}
          isActive={section === "overview" ? true : false}
          color={getColor(planetName)}
        >
          Overview
        </Section>
        <Section
          onClick={() => setSection("structure")}
          isActive={section === "structure" ? true : false}
          color={getColor(planetName)}
        >
          Structure
        </Section>
        <Section
          onClick={() => setSection("geology")}
          isActive={section === "geology" ? true : false}
          color={getColor(planetName)}
        >
          Surface
        </Section>
      </Sections>
      <PlanetFacts>
        <Images>
          <Img
            src={process.env.PUBLIC_URL + returnImgPath(section, planet)}
            alt=""
          />
          <SecondImg
            src={process.env.PUBLIC_URL + planet[0].images.geology}
            alt=""
            isVisible={section === "geology" ? true : false}
          />
        </Images>
        <Info>
          <Name>{planet[0].name}</Name>
          <Content>{returnInfoPath(section, planet).content}</Content>
          <Source>
            Source :{" "}
            <SourceLink
              href={returnInfoPath(section, planet).source}
              target="_blank"
            >
              Wikipedia <StyledSourceSVG />
            </SourceLink>
          </Source>
        </Info>
        <Details>
          <DetailsTitle>ROTATION TIME</DetailsTitle>
          <DetailsValue>{planet[0].rotation}</DetailsValue>
        </Details>
        <Details>
          <DetailsTitle>REVOLUTION TIME</DetailsTitle>
          <DetailsValue>{planet[0].revolution}</DetailsValue>
        </Details>
        <Details>
          <DetailsTitle>radius</DetailsTitle>
          <DetailsValue>{planet[0].radius}</DetailsValue>
        </Details>
        <Details>
          <DetailsTitle>AVERAGE TEMP.</DetailsTitle>
          <DetailsValue>{planet[0].temperature}</DetailsValue>
        </Details>
      </PlanetFacts>
    </Container>
  );
};

export default Planets;

const Container = styled.section``;

const Sections = styled.div`
  padding: 20px 26px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Section = styled.span`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;

  text-align: center;
  letter-spacing: 1.92857px;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.3s;

  color: #ffffff;

  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
  text-decoration-color: ${(props) => props.color};
  text-decoration-thickness: 4px;
  text-underline-offset: 20px;

  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const PlanetFacts = styled.div`
  text-align: center;
  padding: 0 24px 47px 24px;
`;

const Images = styled.div`
  margin: 95px auto 98px;
  position: relative;
`;

const Img = styled.img`
  width: 111px;
  height: 111px;
`;

const SecondImg = styled.img`
  width: 60px;
  height: 70px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30%;

  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const Info = styled.div``;

const Details = styled.div`
  min-height: 48px;
  padding: 0 24px;
  margin-bottom: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid rgba(255, 255, 255, 0.2);
`;
