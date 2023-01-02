import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../store/counter";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncrease = () => {
    dispatch(increase());
  };

  const onIncreaseAsync = () => {
    dispatch(increaseAsync());
  };

  const onDecreaseAsync = () => {
    dispatch(decreaseAsync());
  };
  return (
    <div>
      <CounterTitle>This is Counter</CounterTitle>
      <CounterContent>Now Count is {count}</CounterContent>
      <ButtonContainer>
        <DecreaseButton onClick={onDecrease}>감소</DecreaseButton>
        <IncreaseButton onClick={onIncrease}>증가</IncreaseButton>
        <IncreaseButton onClick={onDecreaseAsync}>1초 감소</IncreaseButton>
        <IncreaseButton onClick={onIncreaseAsync}>1초 증가</IncreaseButton>
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
  width: 15rem;
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
