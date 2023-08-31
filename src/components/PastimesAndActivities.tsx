import React from "react";
import Title from "./Title";
import { PASTIMES_AND_ACTIVITIES } from "../data";

export default function PastimesAndActivities() {
  return (
    <>
      <Title title={PASTIMES_AND_ACTIVITIES.title} />

      <div className="container">
        <ul className="list-disc pl-14">
          {PASTIMES_AND_ACTIVITIES.data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
