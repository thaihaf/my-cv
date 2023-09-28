import Title from "../atoms/Title";
import { SUMMARY } from "../data";
import { StyleSheet, Text } from "@react-pdf/renderer";

interface SummaryProps {
	isPDF?: boolean;
}

const styles = StyleSheet.create({
     line: { textIndent: "56px" },
});
export default function Summary({ isPDF }: SummaryProps) {
     if (isPDF) {
          return (
               <>
                    <Title title={"summary"} isPDF={true} />

                    {SUMMARY.map((item) => (
                         <Text style={styles.line}>{item}</Text>
                    ))}
               </>
          );
     }
     return (
          <>
               <Title title={"summary"} />

               {SUMMARY.map((item) => (
                    <p className="indent-14">{item}</p>
               ))}
          </>
     );
}
