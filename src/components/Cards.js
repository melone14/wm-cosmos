import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

import capsule from "../assets/capsule.png";
import crew from "../assets/crew.png";
import rockets from "../assets/rocket.png";
import starlink from "../assets/starlink.png";

const dataForCards = [
  {
    id: 1,
    url: capsule,
    title: "Capsules",
  },
  {
    id: 2,
    url: crew,
    title: "Crew",
  },
  {
    id: 3,
    url: rockets,
    title: "Rockets",
  },
  {
    id: 4,
    url: starlink,
    title: "Starlink",
  },
];

const Wrapper = styled.div`
  height: 58.333333333vh;
  width: 24.305444433vw;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  row-gap: 30px;
  flex-wrap: wrap;
  position: absolute;
  left: 18.055556vw;
  top: 20.833333vh;
`;

export const Cards = ({ modalVisibility, setType }) => {
  return (
    <Wrapper>
      {dataForCards.map(({ id, url, title }) => {
        const path = title.toLowerCase();
        return (
          <Card
            key={id}
            url={url}
            title={title}
            modalVisibility={modalVisibility}
            setType={() => setType(path)}
          />
        );
      })}
    </Wrapper>
  );
};
