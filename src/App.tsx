import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Summary from "./components/Summary";
import TechnicalSkills from "./components/TechnicalSkills";

export default function App() {
  return (
    <div className="container m-auto max-w-7xl py-12">
      <PersonalInfo />
      <Summary />
      <TechnicalSkills />
    </div>
  );
}
