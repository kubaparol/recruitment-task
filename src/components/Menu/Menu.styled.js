import styled from "styled-components";

const StyledSearchBar = styled.div`
  height: 100vh;
  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #ededed;
  background-color: ${(props) => props.theme.menuBackground};
  z-index: 10;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  p {
    font-size: 26px;
    font-weight: 600;
  }
  span {
    color: #1da7da;
  }
  ul,
  div:nth-child(3) {
    padding: 10px 30px;
  }
  button:nth-child(1) {
    box-shadow: 0 1px 1px #ddd;
  }
  li {
    list-style: inside;
    color: #1da7da;
  }
  a {
    color: #747474;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
  }
`;

export default StyledSearchBar;
