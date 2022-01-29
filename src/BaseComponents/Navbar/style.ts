import styled from "styled-components";
import colors from "../../styles/variables";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const HeadLineP = styled(Link)`
  align-self: center;
  text-decoration: none;
  color: ${colors.Bisque};
`;

export const HeadLine = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  padding-right: 20px;
`;

export const NavbarStructure = styled.section`
  display: flex;
  height: 70px;
  color: ${colors.white};
  padding: 8px 12px;
`;

export const ItemNavbar = styled.div`
  width: calc(100% - 177px);
  display: flex;
  border: 2px solide ${colors.darkGray};
  border-radius: 20px;
  color: ${colors.Sienna};
  margin-left: 50px;
`;

export const InteriorNavbar = styled(Link)`
  font-size: 12px;
  width: 120px;
  display: flex;
  justify-self: center;
  align-items: center;
  color: ${colors.Bisque};
  border: 0 0 0 0 solid ${colors.SaddleBrown};
  padding: 0;
  text-decoration: none;
  align-self: center;
  transition: 0.2s;

  :hover {
    color: ${colors.white};
    transform: scale(1.1);
  }
`;

export default styled;
