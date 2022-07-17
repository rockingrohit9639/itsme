import React from "react";
import "./Loading.css";
import { LineWave } from "react-loader-spinner";

function Loading({ title }) {
  return (
    <div className="loading">
      <LineWave
        color="blue"
        height={110}
        width={110}
        ariaLabel="three-circles-rotating"
      />

      <h1>{title}</h1>
    </div>
  );
}

export default Loading;
