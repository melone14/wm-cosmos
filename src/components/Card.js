import React from "react";
import styled from "styled-components";

const Wrapper = styled.figure`
  position: relative;
  height: 27.08333vh;
  width: 11.1111vw;
  border-radius: 16px;
  overflow: hidden;
  background-image: linear-gradient(
      360deg,
      #2b224a 0%,
      rgba(43, 34, 74, 0) 100%
    ),
    url(${(props) => props.url});
  background-size: cover;
  background-position: center;

  &:before {
    ${(props) => (props.title ? `content: '${props.title}';` : "content: '';")}
    position: absolute;
    top: 21.354167vh;
    font-size: ${({ theme }) => theme.fontSize.H200};
    font-weight: ${({ theme }) => theme.fontWeight.H200};
    left: 0;
    right: 0;
    text-align: center;
  }

  &:hover:before {
    transition: all 0.3s;
    cursor: pointer;
    content: "Details";
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSize.H200};
    font-weight: ${({ theme }) => theme.fontWeight.H200};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      0deg,
      rgba(43, 34, 74, 0.92) 7.69%,
      rgba(70, 58, 113, 0.92) 100%
    );
    backdrop-filter: blur(4px);
  }
`;

export const Card = ({ modalVisibility, setType, url, title }) => {
  return (
    <Wrapper
      onClick={() => {
        modalVisibility();
        setType();
      }}
      url={url}
      title={title}
    />
  );
};
