import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.WrapperBackground};
  color: ${(props) => props.theme.color};
`;

const MainWrapper = styled.div`
  background-color: ${(props) => props.theme.MainBackground};
`;

export { Wrapper, MainWrapper };
