import Title from "../atoms/Title";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ListStyleType from "../atoms/ListStyleType";
import { ListStyleTypeEnum } from "../constants/constants";
import { useTranslation } from "react-i18next";
import { EDUCATION_TYPE } from "@/constants/type";

interface EducationProps {
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
});
export default function Education({ isPDF }: EducationProps) {
     const { t } = useTranslation("translation", {
          keyPrefix: "EDUCATION",
     });
     const data: EDUCATION_TYPE[] = t("data", { returnObjects: true });
     if (isPDF) {
          return (
               <>
                    <Title title={t("title")} isPDF={true} />

                    <View wrap={false}>
                         {data.map((item) => {
                              return (
                                   <View key={item.name}>
                                        <View style={styles.title}>
                                             <Text style={styles.name}>
                                                  {item.name}
                                             </Text>
                                             <Text>{`${item.fromDate} - ${item.toDate}`}</Text>
                                        </View>

                                        <View style={{ paddingLeft: "26px" }}>
                                             {item.details.map((item) => (
                                                  <ListStyleType
                                                       type={
                                                            ListStyleTypeEnum.DOT
                                                       }
                                                       content={item}
                                                       isPDF
                                                  />
                                             ))}
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
                              <div className="mb-8" key={item.name}>
                                   <div className="flex align-center justify-between">
                                        <div className="name font-bold">
                                             {item.name}
                                        </div>
                                        <div className="fromTo">{`${item.fromDate} - ${item.toDate}`}</div>
                                   </div>

                                   <ul className="list-disc pl-14">
                                        {item.details.map((item) => (
                                             <li className="" key={item}>
                                                  {item}
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         );
                    })}
               </div>
          </>
     );
}
