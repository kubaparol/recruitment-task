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
  a:hover {
    color: ${(props) => props.theme.footerItemHoverColor};
    border-bottom: 1px solid #ddd;
  }
  div {
    margin: 42px;
    line-height: 1.7;
    opacity: 0.5;
    font-size: 14px;
  }
  @media ${(props) => props.theme.media.mobile} {
    div {
      display: flex;
      justify-content: center;
    }
    p {
      margin-right: 10px;
    }
  }
`;

export default StyledFooter;
