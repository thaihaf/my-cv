import Title from "./Title";
import { SUMMARY } from "../data";

export default function Summary() {
  return (
    <>
      <Title title={"summary"} />

      {SUMMARY.map((item) => (
        <p className="indent-14">{item}</p>
      ))}
    </>
  );
}
