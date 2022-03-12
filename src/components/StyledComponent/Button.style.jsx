import styled from "styled-components";
import ButtonComp from "./ButtonComp";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  display: inline-block;
  margin: 0 1rem;
  background: ${(props) => props.backgroundColor};

  &:hover {
    background: coral;
    color: #fff;

    & label {
      color: green;
    }
  }
`;

export const ButtonLabel = styled.label`
  font-size: 1.2rem;
`;

export const StyledButton = styled(ButtonComp)`
  width: 200px;
  height: 100px;
  background: ${(props) => props.backgroundColor};
`;
