import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Summary from "./components/Summary";

export default function App() {
  return (
    <div className="container m-auto max-w-7xl py-12 border border-sky-500">
      <PersonalInfo />
      <Summary />
    </div>
  );
}
