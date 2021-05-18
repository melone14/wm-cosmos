import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";

const Wrapper = styled.div`
  width: 540px;
  height: 360px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: rgba(43, 34, 74, 1);
  border-radius: 16px;
`;

export const Modal = ({ close, type }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(`https://api.spacexdata.com/v4/${type}`)
      .then((response) => {
        console.log(type);
        setData(response.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Wrapper>
      <button onClick={() => close()}>close</button>
      {isLoading ? (
        <Spinner />
      ) : (
        data.map((item) => (
          <p key={item.id}>
            {item.type}
            <span style={{ color: "red" }}>{item.status}</span>
          </p>
        ))
      )}
      {error ? error : null}
    </Wrapper>
  );
};
