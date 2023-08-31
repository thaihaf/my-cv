import { PROFESSIONAL_EXPERIENCE } from "../data";
import Title from "./Title";

export default function ProfessionalExperience() {
  return (
    <>
      <Title title={PROFESSIONAL_EXPERIENCE.title} />

      <div className="container">
        {PROFESSIONAL_EXPERIENCE.data.map((item) => {
          return (
            <div className="mb-8" key={item.id}>
              <div className="flex align-center justify-between">
                <div className="name font-bold">{item.name}</div>
                <div className="fromTo">{`${item.fromDate} - ${item.toDate}`}</div>
              </div>

              <div className="font-bold">{`Position: ${item.position}`}</div>

              <div>
                <span className="font-bold">Project: </span>
                <span>{item.project.name}</span>
              </div>

              <ul className="list-disc pl-14">
                <li className="">
                  <span className="font-bold">Project Description: </span>
                  <span>{item.project.desc}</span>
                </li>
                <li className="">
                  <span className="font-bold">Team size: </span>
                  <span>{item.project.size}</span>
                </li>
                <li className="">
                  <p className="font-bold">Responsibilities: </p>

                  <ul className="pl-6">
                    {item.project.responsibility.map((rp) => (
                      <li key={rp}>{rp}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
