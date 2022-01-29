import styled from "styled-components";
import colors from "./styles/variables";

import { TransitionGroup } from "react-transition-group";

export const CustomTransitionGroup = styled(TransitionGroup)`
  height: calc(100% - 166px);
`;

export const BodyBackground = styled.body`
  background-color: ${colors.DarkBrown};
  background-image: radial-gradient(
    ellipse farthest-corner at 0 -100%,
    ${colors.LightRed} 15%,
    ${colors.DarkBrown},
    ${colors.Sienna} 85%,
    ${colors.Gainsboro} 10%
  );
`;
