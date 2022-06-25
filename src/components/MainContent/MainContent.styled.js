import styled from "styled-components";

const StyledMainContent = styled.section`
  padding: 130px 15px;
  background: rgb(33, 34, 38);
  background: linear-gradient(
    180deg,
    rgba(33, 34, 38, 1) 0%,
    rgba(94, 89, 177, 1) 100%
  );
  header {
    text-align: center;
  }
  h2 {
    font-weight: 700;
    color: ${(props) => props.theme.headerMainContentColor};
    font-size: 36px;
    margin-bottom: 20px;
    &::before {
      content: "//";
      position: relative;
      margin-right: 10px;
      font-size: 46px;
      color: #ed2164;
      letter-spacing: -6px;
    }
  }
  p {
    margin-bottom: 30px;
    color: ${(props) => props.theme.paragraphMainContentColor};
    font-size: 18px;
  }
  @media ${(props) => props.theme.media.tablet} {
    header {
      text-align: left;
    }
    p {
      font-size: 18px;
    }
  }
  @media ${(props) => props.theme.media.desktop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    div {
      width: 450px;
      height: 400px;
      border: 1px solid red;
      margin-right: 75px;
    }
    header {
      margin-left: 75px;
      width: 50%;
      max-width: 500px;
    }
  }
`;

export default StyledMainContent;
