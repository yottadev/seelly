import styled from "styled-components";
import colors from "../../styles/variables";

export const FooterStructure = styled.section`
  display: flex;
  border-left: 0px solid ${colors.lightGray};
  border-right: 0px solid ${colors.lightGray};
  border-bottom: 0 solid ${colors.lightGray};
  color: ${colors.white};
  padding: 20px 12px;
`;

export const FooterLink = styled.p`
  color: ${colors.SaddleBrown};
  font-size: 12px;
  margin-left: 104px;
  cursor: pointer;
`;

export const FooterLinkContainer = styled.div`
  width: calc(100% - 169px);
  padding-right: 169px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.div`
  margin-right: 100px;
`;

export const ItemFooter = styled.div`
  color: ${colors.lightGray};
`;
