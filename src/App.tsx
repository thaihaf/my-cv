import { useEffect } from "react";
import Education from "./components/Education";
import PastimesAndActivities from "./components/PastimesAndActivities";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Summary from "./components/Summary";
import TechnicalSkills from "./components/TechnicalSkills";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
     useEffect(function () {
          Aos.init({ duration: 2000 });
     }, []);
     return (
          <div className="container m-auto max-w-7xl py-12">
               <PersonalInfo />
               <Summary />
               <TechnicalSkills />
               <Education />
               <ProfessionalExperience />
               <PastimesAndActivities />
          </div>
     );
}
