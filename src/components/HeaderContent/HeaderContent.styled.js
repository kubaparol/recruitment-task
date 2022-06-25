import styled from "styled-components";

const StyledHeaderContent = styled.section`
  background-color: ${(props) => props.theme.contentHeaderBackground};
  max-width: 1200px;
  margin-top: -1px;
  height: 450px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  padding: 0 30px;
  max-width: 1200px;
  @media ${(props) => props.theme.media.tablet} {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media ${(props) => props.theme.media.desktop} {
    height: 670px;
    padding: 100px 0 170px;
    padding-top: 80px;
    justify-content: center;
  }
  div {
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    @media ${(props) => props.theme.media.tablet} {
      text-align: left;
    }
    @media ${(props) => props.theme.media.desktop} {
      max-width: 500px;
      margin: 50px;
    }
  }
  div:nth-child(2) {
    @media ${(props) => props.theme.media.desktop} {
      height: 400px;
      width: 500px;
      background-color: lightyellow;
    }
  }
  h2 {
    color: #fff;
    font-size: 36px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 30px;
    color: #fff;
    font-size: 18px;
    @media ${(props) => props.theme.media.tablet} {
      font-size: 22px;
    }
  }
`;

export default StyledHeaderContent;
