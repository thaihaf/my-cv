import Title from "../atoms/Title";
import { View } from "@react-pdf/renderer";
import ListStyleType from "../atoms/ListStyleType";
import { ListStyleTypeEnum } from "../constants/constants";
import { useTranslation } from "react-i18next";

interface PastimesAndActivitiesProps {
     isPDF?: boolean;
}
export default function PastimesAndActivities({
     isPDF,
}: PastimesAndActivitiesProps) {
     const { t } = useTranslation("translation", {
          keyPrefix: "PASTIMES_AND_ACTIVITIES",
     });
     const data: string[] = t("data", { returnObjects: true });
     if (isPDF) {
          return (
               <>
                    <Title title={t("title")} isPDF={true} />

                    <View wrap={false}>
                         <View style={{ paddingLeft: "28px" }}>
                              {data.map((item) => (
                                   <ListStyleType
                                        type={ListStyleTypeEnum.DOT}
                                        content={item}
                                        key={item}
                                        isPDF
                                   />
                              ))}
                         </View>
                    </View>
               </>
          );
     }
     return (
          <>
               <Title title={t("title")} />

               <div className="container">
                    <ul className="list-disc pl-14">
                         {data.map((item) => (
                              <li key={item}>{item}</li>
                         ))}
                    </ul>
               </div>
          </>
     );
}
