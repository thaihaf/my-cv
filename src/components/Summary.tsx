import { useTranslation } from "react-i18next";
import Title from "../atoms/Title";
import { StyleSheet, Text } from "@react-pdf/renderer";

interface SummaryProps {
     isPDF?: boolean;
}

const styles = StyleSheet.create({
     line: { textIndent: "56px" },
});
export default function Summary({ isPDF }: SummaryProps) {
     const { t } = useTranslation("translation", {
          keyPrefix: "SUMMARY",
     });
     const data: string[] = t("data", { returnObjects: true });

     if (isPDF) {
          return (
               <>
                    <Title title={t("title")} isPDF={true} />

                    {data.map((item) => (
                         <Text style={styles.line}>{item}</Text>
                    ))}
               </>
          );
     }
     return (
          <>
               <Title title={t("title")} />

               {data.map((item) => (
                    <p className="indent-14">{item}</p>
               ))}
          </>
     );
}
