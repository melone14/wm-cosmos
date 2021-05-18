import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const Wrapper = styled.div`
  height: 448px;
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  row-gap: 30px;
  flex-wrap: wrap;
`;

export const Cards = ({ modalVisibility, setType }) => {
  return (
    <Wrapper>
      <Card
        bg={img1}
        modalVisibility={modalVisibility}
        // type={type}
        setType={() => setType("capsules")}
      />
      <Card
        bg={img2}
        modalVisibility={modalVisibility}
        // type={type}
        setType={() => setType("crew")}
      />
      <Card
        bg={img3}
        modalVisibility={modalVisibility}
        // type={type}
        setType={() => setType("rockets")}
      />
      <Card
        bg={img4}
        modalVisibility={modalVisibility}
        // type={type}
        setType={() => setType("starlink")}
      />
    </Wrapper>
  );
};
