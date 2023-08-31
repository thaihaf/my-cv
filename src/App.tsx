import { useState } from "react";
import "./App.css";
import Actions from "./components/Actions";
import Education from "./components/Education";
import PastimesAndActivities from "./components/PastimesAndActivities";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Summary from "./components/Summary";
import TechnicalSkills from "./components/TechnicalSkills";

export default function App() {
  const a =5;
 
  const [count, setCount] = useState<number>(0);
  return (
    <div className="container m-auto max-w-7xl py-12">
      <div className="">{count}</div>
      <div className="" onClick={() => setCount((pre: number) => pre + 1)}>
        +
      </div>
      <Actions a={a}/>
      <PersonalInfo />
      <Summary />
      <TechnicalSkills />
      <Education />
      <ProfessionalExperience />
      <PastimesAndActivities />
    </div>
  );
}
