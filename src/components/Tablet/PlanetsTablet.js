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

const PlanetsTablet = ({ data, section, setSection }) => {
  const { planetName } = useParams();

  const planet = data.filter((el) => {
    return planetName ? el.name === planetName : data;
  });

  return (
    <Container>
      <Wrapper>
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
        <PlanetFacts>
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
          <Sections>
            <Section
              onClick={() => setSection("overview")}
              isActive={section === "overview" ? true : false}
              color={getColor(planetName)}
            >
              <Num>01</Num>Overview
            </Section>
            <Section
              onClick={() => setSection("structure")}
              isActive={section === "structure" ? true : false}
              color={getColor(planetName)}
            >
              <Num>02</Num>Internal Structure
            </Section>
            <Section
              onClick={() => setSection("geology")}
              isActive={section === "geology" ? true : false}
              color={getColor(planetName)}
            >
              <Num>03</Num>Surface Geology
            </Section>
          </Sections>
        </PlanetFacts>
      </Wrapper>
      <Details>
        <Detail>
          <DetailsTitle>ROTATION TIME</DetailsTitle>
          <DetailsValue>{planet[0].rotation}</DetailsValue>
        </Detail>
        <Detail>
          <DetailsTitle>REVOLUTION TIME</DetailsTitle>
          <DetailsValue>{planet[0].revolution}</DetailsValue>
        </Detail>
        <Detail>
          <DetailsTitle>radius</DetailsTitle>
          <DetailsValue>{planet[0].radius}</DetailsValue>
        </Detail>
        <Detail>
          <DetailsTitle>AVERAGE TEMP.</DetailsTitle>
          <DetailsValue>{planet[0].temperature}</DetailsValue>
        </Detail>
      </Details>
    </Container>
  );
};

export default PlanetsTablet;

const Container = styled.section`
  padding: 146px 40px 36px 40px;

  @media screen and (min-width: 1200px) {
    padding: 126px 165px 56px 165;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    padding-right: 150px;
  }
`;

const Images = styled.div`
  margin: 0 auto 130px;
  text-align: center;
  position: relative;

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 184px;
  height: 184px;

  @media screen and (min-width: 1200px) {
    width: 390px;
    height: 390px;
  }
`;

const SecondImg = styled.img`
  width: 100px;
  height: 120px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30%;

  display: ${(props) => (props.isVisible ? "block" : "none")};

  @media screen and (min-width: 1200px) {
    width: 163px;
    height: 199px;

    bottom: -10%;
  }
`;

const PlanetFacts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 70px;

  margin-bottom: 27px;

  @media screen and (min-width: 1200px) {
    display: block;

    margin-bottom: 87px;
  }
`;

const Info = styled.div`
  min-width: 339px;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const Section = styled.button`
  padding: 0 50px;
  min-height: 40px;
  position: relative;

  display: flex;
  align-items: center;

  background: ${(props) => (props.isActive ? props.color : "transparent")};
  border: 1px solid rgba(255, 255, 255, 0.2);

  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1.92857px;

  cursor: pointer;
  transition: all 0.3s;

  color: #ffffff;

  &:hover {
    background: ${(props) =>
      props.isActive ? null : "rgba(255, 255, 255, 0.2)"};
  }

  @media screen and (min-width: 1200px) {
    min-height: 48px;
    padding: 0 74px;

    font-size: 12px;
    letter-spacing: 2.57143px;
  }
`;

const Num = styled.h2`
  position: absolute;
  left: 20px;

  opacity: 0.5;

  @media screen and (min-width: 1200px) {
    left: 28px;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 11px;

  @media screen and (min-width: 1200px) {
    column-gap: 30px;
  }
`;

const Detail = styled.div`
  min-height: 88px;
  padding: 16px;
  text-transform: uppercase;

  border: 1px solid rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 1200px) {
    min-height: 128px;
  }
`;
