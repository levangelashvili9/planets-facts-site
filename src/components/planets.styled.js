import styled from "styled-components";
import { ReactComponent as SourceSVG } from "../assets/icon-source.svg";

export const Name = styled.h1`
  font-family: "Antonio", sans-serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;

  text-align: center;
  text-transform: uppercase;

  margin-bottom: 16px;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 62px;
    margin-bottom: 24px;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    font-size: 80px;
    line-height: 104px;
  }
`;

export const Content = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;

  text-align: center;

  margin-bottom: 32px;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 25px;
  }
`;

export const Source = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;

  color: #ffffff;

  opacity: 0.5;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 39px;
    font-size: 14px;
  }
`;

export const DetailsTitle = styled.h2`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;

  letter-spacing: 0.727273px;
  text-transform: uppercase;

  color: #ffffff;

  opacity: 0.5;

  @media screen and (min-width: 768px) {
    margin-bottom: 6px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 11px;
    line-height: 25px;
  }
`;

export const DetailsValue = styled.p`
  font-family: "Antonio", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  text-align: right;
  letter-spacing: -0.75px;
  text-transform: uppercase;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
    line-height: 52px;
  }
`;

export const SourceLink = styled.a`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;

  text-decoration-line: underline;
  color: #ffffff;
`;

export const StyledSourceSVG = styled(SourceSVG)`
  transform: translateY(2px) scale(0.8);
`;
