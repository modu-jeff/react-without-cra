import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/counter">Counter Page</Link>
      <button
        onClick={() => {
          navigate("/counter");
        }}
      >
        카운터 페이지로
      </button>
    </>
  );
};

export default Home;
