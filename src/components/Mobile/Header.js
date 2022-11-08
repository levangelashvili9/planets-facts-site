import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as HamburgerSVG } from "../../assets/icon-hamburger.svg";

const Header = ({ hidden, setHidden }) => {
  return (
    <Container>
      <StyledLink to={"/"}>
        <Heading>The Planets</Heading>
      </StyledLink>
      <StyledHamburgerSVG
        onClick={() => setHidden((hidden) => !hidden)}
        hidden={hidden}
      />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 68px;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Heading = styled.h1`
  font-family: "Antonio", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;

  color: #ffffff;
`;

const StyledHamburgerSVG = styled(HamburgerSVG)`
  cursor: pointer;
  opacity: ${(props) => (props.hidden ? 0.25 : 1)};
  transition: all 0.3s;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
