import styled from "styled-components";

const StyledHeaderContent = styled.section`
  height: auto;
  padding-bottom: 60px;
  max-width: 1200px;
  margin: 0 auto;
  @media ${(props) => props.theme.media.tablet} {
    div:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
    }
  }
  header {
    text-align: center;
    margin: 30px 0;
  }
  h2::after {
    content: "";
    position: relative;
    display: block;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 70px;
    background-color: ${(props) => props.theme.headerBorderColor};
  }
  h2 {
    padding-bottom: 10px;
    font-size: 30px;
  }
  article {
    background-color: ${(props) => props.theme.articleBacground};
    border: 1px solid #eaeaea;
    border-radius: 3px;
    overflow: hidden;
    margin: 10px;
    @media ${(props) => props.theme.media.tablet} {
      width: 46%;
      margin: 14px;
    }
    @media ${(props) => props.theme.media.desktop} {
      width: 30%;
    }
  }
  a > div {
    width: auto;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  p {
    padding: 15px 30px;
  }
  p:nth-child(2) {
    color: #343434;
    font-size: 22px;
  }
  p:nth-child(3) {
    color: green;
    font-size: 14;
    font-weight: 500;
    margin-bottom: 15px;
  }
  div:nth-last-child(1) {
    padding-top: 60px;
    text-align: center;
  }
`;

export default StyledHeaderContent;
