import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 16px;
  margin-bottom: 0;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: ${(props) => props.theme.defaultBtnBackground};
  color: ${(props) => props.theme.defaultBtnColor};
  text-transform: capitalize;
  font-size: 0.9em;
  min-width: 100px;
  &:hover {
    background-color: ${(props) => props.theme.defaultBtnBackgroundHover};
  }
  @media ${(props) => props.theme.media.tablet} {
    cursor: pointer;
  }
  ${(props) =>
    props.id === "bars" &&
    css`
      font-size: 20px;
      background-color: transparent;
      min-width: 20px;
      opacity: 0.7;
      &:focus {
        background-color: transparent;
      }
      @media ${(props) => props.theme.media.tablet} {
        display: none;
      }
    `}
  ${(props) =>
    props.id === "article" &&
    css`
      background-color: ${(props) => props.theme.articleBtnBackground};
      border: 1px solid ${(props) => props.theme.articleBtnBorder};
      color: ${(props) => props.theme.articleBtnColor};
      &:hover {
        background-color: ${(props) => props.theme.articleBtnBackgroundHover};
        color: ${(props) => props.theme.articleBtnColorHover};
      }
    `}
  ${(props) =>
    props.id === "mainContent" &&
    css`
      background-color: ${(props) => props.theme.mainBtnBackground};
      &:hover {
        background-color: ${(props) => props.theme.mainBtnBackgroundHover};
      }
      padding: 12px 18px;
    `}
  ${(props) =>
    props.id === "close" &&
    css`
      padding: 0;
      min-width: 0;
      font-size: 28px;
      margin-left: 15px;
      background-color: transparent;
      color: grey;
      opacity: 0.7;
      &:hover {
        background-color: transparent;
        opacity: 1;
      }
    `}
`;

export default StyledButton;
