import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../styles/variables";

export const Main = styled.body`
  width: 100%;
  height: calc(100% - 50px);
  padding-top: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const ContentStructure = styled.div`
  width: 24%;
  margin-right: 80px;
`;

export const ContentSide = styled.div`
  background-color: ${colors.Sienna};
  width: 60%;
  height: 600px;
  margin: 0 30px 0 70px;

  &::before {
    content: "";
    filter: brightness(30%);
    width: 60%;
    height: 600px;
    position: absolute;
    background-size: cover;

    ${({ bgImg }: { bgImg: string }) => `background-image: url(${bgImg})`};
  }
`;

export const ContentMaintext = styled.p`
  position: relative;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

export const Contentsubtext = styled.p`
  font-size: 16px;
  position: relative;
  color: ${colors.white};
  height: 200px;
  padding: 0 250px;
`;

export const BannerStructure = styled.div`
  width: 100%;
  height: 100%;
`;

export const BannerCapsule = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    filter: grayscale(100%) brightness(50%);
    background-position: center;
    background-size: cover;
    transition: filter 0.5s;

    ${({ bgImg }: { bgImg: string }) => `background-image: url(${bgImg})`};
  }

  &:hover {
    &::before {
      filter: grayscale(0) brightness(100%);
    }
  }
`;

export const BannerJogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 32px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  font-weight: bold;
  color: ${colors.white};
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${colors.SaddleBrown};
    transform: scale(1.1);
    text-shadow: ${colors.Pantone} 2.1px 2.1px 0px;
  }
`;
