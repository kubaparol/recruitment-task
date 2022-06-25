import styled from "styled-components";

const StyledSearchBar = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 10;
  div {
    background-color: #191c1e;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    align-items: center;
  }
  input {
    padding: 10px;
    width: 80%;
    border: none;
    background-color: transparent;
    outline: none;
    color: white;
    font-size: 1.7rem;
  }
  @media ${(props) => props.theme.media.tablet} {
    div {
      height: 80px;
    }
    input {
      width: 40%;
    }
  }
`;

export default StyledSearchBar;
