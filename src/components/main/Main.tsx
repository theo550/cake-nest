import styled from "styled-components";
import { theme } from "../../theme/theme";

type Props = {
  children: JSX.Element;
}

function Main(props: Props) {
  const { children } = props;

  return (
    <Container>
      {children}
    </Container>
  )
}

export default Main

const Container = styled.div`
  flex-grow: 1;
  background-color: #fff;

  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

  box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
`;