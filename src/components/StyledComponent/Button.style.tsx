import styled from 'styled-components'
import ButtonComp, { buttonCompProps } from './ButtonComp'

type buttonProps = {
  backgroundColor: string
}

type styledButtonProps = Omit<buttonCompProps, 'className'> & {
  backgroundColor: string
}

export const Button = styled.button`
  width: 200px;
  height: 50px;
  display: inline-block;
  margin: 0 1rem;
  background: ${(props: buttonProps) => props.backgroundColor};

  &:hover {
    background: coral;
    color: #fff;

    & label {
      color: green;
    }
  }
`

export const ButtonLabel = styled.label`
  font-size: 1.2rem;
`

export const StyledButton = styled(ButtonComp)`
  width: 200px;
  height: 100px;
  background: ${(props: styledButtonProps) => props.backgroundColor};
`
