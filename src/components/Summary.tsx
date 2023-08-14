import React from "react";
import Title from "./Title";
import { SUMMARY } from "../data";

export default function Summary() {
  return (
    <>
      <Title title={"summary"} />
      {SUMMARY.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}
