import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.headerBackground};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  @media ${(props) => props.theme.media.tablet} {
    height: 80px;
    padding-right: 15px;
    padding-left: 15px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  div > a {
    text-transform: lowercase;
    font-weight: 700;
    font-size: 26px;
    margin-left: 5px;
    margin-right: 15px;
  }
  li > a {
    vertical-align: middle;
    font-weight: 400;
    padding: 0 15px;
    font-size: 16px;
    opacity: 0.9;
  }
  div {
    display: flex;
    align-items: center;
  }
  div:nth-child(1) {
    display: none;
    @media ${(props) => props.theme.media.tablet} {
      display: flex;
    }
  }
  div:nth-child(3) {
    button:nth-child(1) {
      padding: 0 15px;
      vertical-align: middle;
      border: none;
      background-color: transparent;
      color: #fff;
      opacity: 0.6;
      font-weight: 400;
      font-size: 17px;
      min-width: 20px;
    }
    button:nth-child(2) {
      display: none;
      @media ${(props) => props.theme.media.tablet} {
        display: block;
      }
    }
  }
`;

export default StyledHeader;
