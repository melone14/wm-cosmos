import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";
import closeIcon from "../assets/closeIcon.svg";

const Wrapper = styled.div`
  width: 37.5vw;
  height: 46.875vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: linear-gradient(0deg, #2b224a, #2b224a),
    linear-gradient(0deg, #ffffff, #ffffff);
  border: 1px solid #342957;
  border-radius: 16px;
`;

const Button = styled.img`
  width: 2.592593%;
  height: 3.888889%;
  position: absolute;
  top: 8.055556%;
  right: 5.37037%;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.H500};
  position: absolute;
  top: 5.5555556%;
  left: 1.666667vw;
`;

const Menu = styled.div`
  width: 34.166667vw;
  height: 5.208333vh;
  background: rgba(52, 42, 86, 1);
  margin: 0 auto;
  display: flex;
  margin-top: 8.854167vh;
`;

const Container = styled.div`
  width: 34.166667vw;
  height: 27.604167vh;
  margin: 0 auto;
  margin-top: 2.083333vh;
  overflow-y: scroll;
  display: flex;
`;

const Data = styled.p`
  display: inline-block;
  width: 214px;
  height: 20px;
  margin-left: 16px;
  color: rgba(210, 203, 233, 1);
  font-size: ${({ theme }) => theme.fontSize.H200};
  line-height: ${({ theme }) => theme.lineHeight.H200};
  margin-bottom: 28px;
`;

const DataType = styled.div`
  width: 50%;
  border-radius: 4px;
  padding-left: 6.504065%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.H200};
  font-weight: ${({ theme }) => theme.fontWeight.H200};
  color: ${({ theme }) => theme.colors.modalDarker};
  &:hover {
    background: ${({ theme }) => theme.colors.modalMenuDarker};
  }
`;

const DataType1 = styled(DataType)``;

const SmallContainer = styled.div`
  width: 50%;
`;

const Overlay = styled.div`
  width: 33.819444vw;
  height: 6.770833vh;
  z-index: 100;
  position: absolute;
  bottom: 2.85vh;
  background: linear-gradient(180deg, rgba(43, 34, 74, 0) 0%, #2b224a 100%);
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
      <Title>{type.charAt(0).toUpperCase() + type.slice(1)}</Title>
      <Button src={closeIcon} onClick={() => close()} />
      <Menu>
        <DataType>Type</DataType>
        <DataType1>Status</DataType1>
      </Menu>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <SmallContainer>
            {data.map((item) => (
              <Data key={item.id}>{item.type}</Data>
            ))}
          </SmallContainer>
          <SmallContainer>
            {data.map((item) => (
              <Data>{item.status}</Data>
            ))}
          </SmallContainer>
          <Overlay />
        </Container>
      )}
      {error ? error : null}
    </Wrapper>
  );
};
