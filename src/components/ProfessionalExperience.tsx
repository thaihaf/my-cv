import Title from "../atoms/Title";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ListStyleType from "../atoms/ListStyleType";
import { ListStyleTypeEnum } from "../constants/constants";
import { useTranslation } from "react-i18next";
import { PROFESSIONAL_EXPERIENCE_TYPE } from "@/constants/type";

interface ProfessionalExperienceProps {
     isPDF?: boolean;
}

const styles = StyleSheet.create({
     title: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
     },
     name: {
          fontWeight: "bold",
     },
     project: {
          display: "flex",
          flexDirection: "row",
          gap: "5px",
     },
     description: {
          display: "flex",
          flexDirection: "row",
          gap: "5px",
     },
     teamSize: {
          display: "flex",
          flexDirection: "row",
          gap: "5px",
     },
});
export default function ProfessionalExperience({
     isPDF,
}: ProfessionalExperienceProps) {
     const { t } = useTranslation("translation", {
          keyPrefix: "PROFESSIONAL_EXPERIENCE",
     });
     const data: PROFESSIONAL_EXPERIENCE_TYPE[] = t("data", {
          returnObjects: true,
     });

     if (isPDF) {
          return (
               <>
                    <Title title={t("title")} isPDF={true} />

                    <View>
                         {data.map((item) => {
                              return (
                                   <View
                                        style={{ marginBottom: "32px" }}
                                        key={item.id}
                                   >
                                        <View style={styles.title}>
                                             <Text style={styles.name}>
                                                  {item.name}
                                             </Text>
                                             <Text>{`${item.fromDate} - ${item.toDate}`}</Text>
                                        </View>

                                        <Text style={{ fontWeight: 600 }}>{`${t(
                                             "project_title.position"
                                        )}:  ${item.position}`}</Text>
                                        <Text style={{ fontWeight: 600 }}>{`${t(
                                             "project_title.name"
                                        )}:  ${item.project.name}`}</Text>

                                        <View style={{ paddingLeft: "56px" }}>
                                             <View style={styles.description}>
                                                  <ListStyleType
                                                       type={
                                                            ListStyleTypeEnum.DOT
                                                       }
                                                       content={`${t(
                                                            "project_title.desc"
                                                       )}: `}
                                                       isBold
                                                       isPDF
                                                  />
                                                  <Text>
                                                       {item.project.desc}
                                                  </Text>
                                             </View>
                                             <View style={styles.teamSize}>
                                                  <ListStyleType
                                                       type={
                                                            ListStyleTypeEnum.DOT
                                                       }
                                                       content={`${t(
                                                            "project_title.size"
                                                       )}: `}
                                                       isBold
                                                       isPDF
                                                  />
                                                  <Text>
                                                       {item.project.size}
                                                  </Text>
                                             </View>
                                             <View>
                                                  <ListStyleType
                                                       type={
                                                            ListStyleTypeEnum.DOT
                                                       }
                                                       content={`${t(
                                                            "project_title.responsibility"
                                                       )}`}
                                                       isBold
                                                       isPDF
                                                  />

                                                  <View
                                                       style={{
                                                            paddingLeft: "24px",
                                                       }}
                                                  >
                                                       {item.project.responsibility.map(
                                                            (rp) => (
                                                                 <Text key={rp}>
                                                                      {rp}
                                                                 </Text>
                                                            )
                                                       )}
                                                  </View>
                                             </View>
                                        </View>
                                   </View>
                              );
                         })}
                    </View>
               </>
          );
     }
     return (
          <>
               <Title title={t("title")} />

               <div className="container">
                    {data.map((item) => {
                         return (
                              <div className="mb-8" key={item.id}>
                                   <div className="flex align-center justify-between">
                                        <div className="name font-bold">
                                             {item.name}
                                        </div>
                                        <div className="fromTo">{`${item.fromDate} - ${item.toDate}`}</div>
                                   </div>

                                   <div className="font-bold">
                                        {`${t("project_title.position")}: ${
                                             item.position
                                        }`}
                                   </div>
                                   <div className="font-bold">
                                        {`${t("project_title.name")}: ${
                                             item.project.name
                                        }`}
                                   </div>

                                   <ul className="list-disc pl-14">
                                        <li className="font-bold">
                                             {`${t("project_title.desc")}: ${
                                                  item.project.desc
                                             }`}
                                        </li>
                                        <li className="font-bold">
                                             {`${t("project_title.size")}: ${
                                                  item.project.size
                                             }`}
                                        </li>
                                        <li>
                                             <p className="font-bold">
                                                  {`${t(
                                                       "project_title.responsibility"
                                                  )}: `}
                                             </p>

                                             <ul className="pl-6">
                                                  {item.project.responsibility.map(
                                                       (rp) => (
                                                            <li key={rp}>
                                                                 {rp}
                                                            </li>
                                                       )
                                                  )}
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
