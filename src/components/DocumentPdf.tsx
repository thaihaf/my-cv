import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import TechnicalSkills from "./TechnicalSkills";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import PastimesAndActivities from "./PastimesAndActivities";

const styles = StyleSheet.create({
     page: {
          margin: "auto",
          maxWidth: "1280px",
          padding: "48px",
          fontSize: "12px",
          fontFamily: "Open Sans",
     },
});

const DocumentPdf = () => (
     <Document>
          <Page size="A4" style={styles.page}>
               <PersonalInfo isPDF={true} />
               <Summary isPDF={true} />
               <TechnicalSkills isPDF={true} />
               <Education isPDF={true} />
               <ProfessionalExperience isPDF={true} />
               <PastimesAndActivities isPDF={true} />
          </Page>
     </Document>
);

export default DocumentPdf;
