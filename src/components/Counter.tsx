import React, { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const increase = () => {
    setCount((pres) => pres + 1);
  };
  return (
    <div>
      <CounterTitle>This is Counter</CounterTitle>
      <CounterContent>Now Count is {count}</CounterContent>
      <ButtonContainer>
        <DecreaseButton onClick={decrease}>감소</DecreaseButton>
        <IncreaseButton onClick={increase}>증가</IncreaseButton>
      </ButtonContainer>
    </div>
  );
};

export default Counter;

const CounterTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  width: 30rem;
  margin: 0 auto;
`;

const CounterContent = styled.h3`
  font-size: 3rem;
  text-align: center;
  width: 30rem;
  margin: 3rem auto 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  margin: 0 auto;
  button + button {
    margin-left: 8px;
  }
`;

const IncreaseButton = styled.button`
  width: 3rem;
  height: 2rem;
`;

const DecreaseButton = styled(IncreaseButton)``;
