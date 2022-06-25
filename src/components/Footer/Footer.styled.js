import styled from "styled-components";

const StyledFooter = styled.section`
  padding: 40px 30px;
  text-align: center;
  h3 {
    margin-bottom: 30px;
    margin-top: 0;
    font-size: 28px;
    font-weight: 300;
    opacity: 0.2;
  }
  ul {
    padding-left: 0;
    margin-left: -5px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    justify-content: center;
  }
  li {
    padding: 0 7px;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  div {
    margin-bottom: 30px;
    line-height: 1.7;
    opacity: 0.5;
  }
`;

export default StyledFooter;
