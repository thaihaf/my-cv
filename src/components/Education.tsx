import { EDUCATION } from "../data";
import Title from "./Title";

export default function Education() {
  return (
    <>
      <Title title={EDUCATION.title} />

      <div className="container">
        {EDUCATION.data.map((item) => {
          return (
            <div className="mb-8" key={item.id}>
              <div className="flex align-center justify-between">
                <div className="name font-bold">{item.name}</div>
                <div className="fromTo">{`${item.fromDate} - ${item.toDate}`}</div>
              </div>

              <ul className="list-disc pl-14">
                {item.details.map((item) => (
                  <li className="" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
