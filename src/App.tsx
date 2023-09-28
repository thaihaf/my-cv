import { useEffect } from "react";
import "./App.css";
import Education from "./components/Education";
import PastimesAndActivities from "./components/PastimesAndActivities";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Summary from "./components/Summary";
import TechnicalSkills from "./components/TechnicalSkills";
import Aos from "aos";
import "aos/dist/aos.css";
import { PDFViewer } from "@react-pdf/renderer";
import DocumentPdf from "./components/DocumentPdf";

export default function App() {
     useEffect(function () {
          Aos.init({ duration: 2000 });
     }, []);
     return (
          <>
               <PDFViewer
                    style={{
                         width: window.innerWidth,
                         height: window.innerHeight,
                    }}
               >
                    <DocumentPdf />
               </PDFViewer>
               <div className="container m-auto max-w-7xl py-12">
                    <PersonalInfo />
                    <Summary />
                    <TechnicalSkills />
                    <Education />
                    <ProfessionalExperience />
                    <PastimesAndActivities />
               </div>
          </>
     );
}
