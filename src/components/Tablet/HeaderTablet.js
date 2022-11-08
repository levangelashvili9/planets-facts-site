import React from "react";
import styled from "styled-components";
import { NavLink, useParams, Link } from "react-router-dom";
import { getColor } from "../helperFunctions";

const HeaderTablet = ({ data }) => {
  const { planetName } = useParams();

  return (
    <Container>
      <StyledLink to={"/"}>
        <Heading>The Planets</Heading>
      </StyledLink>
      <Navigation>
        {data.map((planet, id) => {
          return (
            <StyledNavLink
              to={`/${planet.name}`}
              key={id}
              color={getColor(planetName)}
            >
              {planet.name}
            </StyledNavLink>
          );
        })}
      </Navigation>
    </Container>
  );
};

export default HeaderTablet;

const Container = styled.div`
  padding: 32px 52px 0;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 22px 40px 0 32px;
  }
`;

const Heading = styled.h1`
  font-family: "Antonio", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;

  text-align: center;

  margin-bottom: 39px;

  color: #ffffff;

  @media screen and (min-width: 1200px) {
    margin-bottom: 27px;
    font-size: 30px;
  }
`;

const Navigation = styled.div`
  display: flex;
  gap: 33px;
  justify-content: center;

  margin-bottom: 27px;

  @media screen and (min-width: 860px) {
    gap: 40px;
  }

  @media screen and (min-width: 1000px) {
    gap: 50px;
  }

  @media screen and (min-width: 1200px) {
    gap: 33px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;

  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;

  opacity: 0.75;
  color: #ffffff;
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
  }

  &.active {
    opacity: 1;
  }

  @media screen and (min-width: 1200px) {
    font-size: 13px;

    &.active {
      text-decoration: underline;
      text-decoration-color: ${(props) => props.color};
      text-decoration-thickness: 4px;
      text-underline-offset: -43px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
