import styled from "styled-components";
import spinner from "../assets/spinner.gif";

const StyledSpinner = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 60px;
  height: 60px;
`;

export const Spinner = () => {
  return <StyledSpinner src={spinner} alt="Loading" />;
};
