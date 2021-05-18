import React from "react";
import styled from "styled-components";

const Wrapper = styled.figure`
  height: 208px;
  width: 160px;
  border-radius: 16px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  &:hover:before {
    content: "Details";
    text-align: center;
    padding: 57% 0;
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

export const Card = ({ bg, modalVisibility, setType }) => {
  return (
    <Wrapper
      onClick={() => {
        modalVisibility();
        setType();
      }}
    >
      <Overlay>
        <Image src={bg} alt="sdsa" />
      </Overlay>
    </Wrapper>
  );
};
