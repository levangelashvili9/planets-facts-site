import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChevronSVG } from "../../assets/icon-chevron.svg";

const Navigation = ({ data, setHidden }) => {
  const iconColors = [
    "#DEF4FC",
    "#F7CC7F",
    "#545BFE",
    "#FF6A45",
    "#ECAD7A",
    "#FCCB6B",
    "#65F0D5",
    "#497EFA",
  ];

  return (
    <Container>
      {data.map((planet, id) => {
        return (
          <StyledNavLink
            to={`/${planet.name}`}
            key={id}
            onClick={() => setHidden(false)}
          >
            <Circle color={iconColors[id]} />
            <LinkText>{planet.name}</LinkText>
            <StyledChevronSVG />
          </StyledNavLink>
        );
      })}
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  margin: 0 24px 67px 24px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;

  position: relative;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;

  text-decoration: none;

  padding: 20px 0;

  &:first-child {
    padding-top: 0px;
    margin-top: 44px;
  }

  &:last-child {
    padding-bottom: 0;
    border: none;
  }

  &:hover {
    opacity: 0.75;
  }

  &.active {
    opacity: 0.25;
  }
`;

const LinkText = styled.h2`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;

  letter-spacing: 1.36364px;
  text-transform: uppercase;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};

  margin-right: 25px;
`;

const StyledChevronSVG = styled(ChevronSVG)`
  position: absolute;
  right: 8px;
`;
