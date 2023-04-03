import ScrollBar from "react-perfect-scrollbar";
import styled from "styled-components";

export const Scroll = styled(ScrollBar).attrs({
  options: { suppressScrollX: true },
})`
  width: 100%;
`;
