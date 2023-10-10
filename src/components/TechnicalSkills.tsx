import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Title from "../atoms/Title";
import ListStyleType from "../atoms/ListStyleType";
import { ListStyleTypeEnum } from "../constants/constants";
import { useTranslation } from "react-i18next";
import { TECHNICAL_SKILLS_TYPE } from "@/constants/type";
import React from "react";
interface TechnicalSkillsProps {
     isPDF?: boolean;
}

const styles = StyleSheet.create({
     wrapper: { display: "flex", flexDirection: "row", width: "100%" },
     column: { flex: 1 },
     item: { marginLeft: "35px" },
     itemDetails: {
          paddingLeft: "24px",
     },
});
export default function TechnicalSkills({ isPDF }: TechnicalSkillsProps) {
     const { t } = useTranslation("translation", {
          keyPrefix: "TECHNICAL_SKILLS",
     });
     const data: TECHNICAL_SKILLS_TYPE[] = t("data", { returnObjects: true });

     if (isPDF) {
          return (
               <>
                    <Title title={t("title")} isPDF={true} />

                    <View style={{ marginBottom: "15px" }}>
                         <View style={styles.wrapper}>
                              {[0, 1].map((value) => (
                                   <View style={styles.column} key={value}>
                                        {data
                                             ?.slice(value * 3, value * 3 + 3)
                                             .map((skills) => (
                                                  <View
                                                       style={styles.item}
                                                       key={skills.title}
                                                  >
                                                       <ListStyleType
                                                            type={
                                                                 ListStyleTypeEnum.DOT
                                                            }
                                                            content={`${skills.title}:`}
                                                            isBold
                                                            isPDF
                                                       />
                                                       <View
                                                            style={
                                                                 styles.itemDetails
                                                            }
                                                       >
                                                            {skills.data.map(
                                                                 (skill) => {
                                                                      if (
                                                                           typeof skill ===
                                                                           "object"
                                                                      ) {
                                                                           return (
                                                                                <React.Fragment
                                                                                     key={
                                                                                          skill.title
                                                                                     }
                                                                                >
                                                                                     <Text>
                                                                                          {
                                                                                               skill.title
                                                                                          }
                                                                                     </Text>
                                                                                     {skill.details.map(
                                                                                          (
                                                                                               item
                                                                                          ) => (
                                                                                               <ListStyleType
                                                                                                    type={
                                                                                                         ListStyleTypeEnum.DISC
                                                                                                    }
                                                                                                    content={
                                                                                                         item
                                                                                                    }
                                                                                                    key={
                                                                                                         item
                                                                                                    }
                                                                                                    isPDF
                                                                                               />
                                                                                          )
                                                                                     )}
                                                                                </React.Fragment>
                                                                           );
                                                                      }
                                                                      return (
                                                                           <ListStyleType
                                                                                type={
                                                                                     ListStyleTypeEnum.DISC
                                                                                }
                                                                                content={
                                                                                     skill
                                                                                }
                                                                                key={
                                                                                     skill
                                                                                }
                                                                                isPDF
                                                                           />
                                                                      );
                                                                 }
                                                            )}
                                                       </View>
                                                  </View>
                                             ))}
                                   </View>
                              ))}
                         </View>

                         <View style={styles.item}>
                              <ListStyleType
                                   type={ListStyleTypeEnum.DOT}
                                   content={`${data[data.length - 1]?.title}:`}
                                   isBold
                                   isPDF
                              />
                              <View style={styles.itemDetails}>
                                   {data[data.length - 1]?.data.map(
                                        (skill) =>
                                             typeof skill === "string" && (
                                                  <ListStyleType
                                                       type={
                                                            ListStyleTypeEnum.DISC
                                                       }
                                                       content={skill}
                                                       key={skill}
                                                       isPDF
                                                  />
                                             )
                                   )}
                              </View>
                         </View>
                    </View>
               </>
          );
     }
     return (
          <>
               <Title title={t("title")} />

               <div className="container">
                    <div className="grid grid-cols-2">
                         {[0, 1].map((value) => (
                              <div className="pl-24" key={value}>
                                   {data
                                        ?.slice(value * 3, value * 3 + 3)
                                        .map((skills) => {
                                             if (
                                                  skills.title !==
                                                  "Foreign Languages"
                                             ) {
                                                  return (
                                                       <div key={skills.title}>
                                                            <ListStyleType
                                                                 type={
                                                                      ListStyleTypeEnum.DOT
                                                                 }
                                                                 content={`${skills.title}:`}
                                                                 isBold
                                                            />
                                                            <div className="pl-6">
                                                                 {skills.data.map(
                                                                      (
                                                                           skill
                                                                      ) => {
                                                                           if (
                                                                                typeof skill ===
                                                                                "object"
                                                                           ) {
                                                                                return (
                                                                                     <React.Fragment
                                                                                          key={
                                                                                               skill.title
                                                                                          }
                                                                                     >
                                                                                          <div className="font-bold">
                                                                                               {
                                                                                                    skill.title
                                                                                               }
                                                                                          </div>
                                                                                          {skill.details.map(
                                                                                               (
                                                                                                    item
                                                                                               ) => (
                                                                                                    <ListStyleType
                                                                                                         type={
                                                                                                              ListStyleTypeEnum.DISC
                                                                                                         }
                                                                                                         content={
                                                                                                              item
                                                                                                         }
                                                                                                         key={
                                                                                                              item
                                                                                                         }
                                                                                                    />
                                                                                               )
                                                                                          )}
                                                                                     </React.Fragment>
                                                                                );
                                                                           }
                                                                           return (
                                                                                <ListStyleType
                                                                                     type={
                                                                                          ListStyleTypeEnum.DISC
                                                                                     }
                                                                                     content={
                                                                                          skill
                                                                                     }
                                                                                     key={
                                                                                          skill
                                                                                     }
                                                                                />
                                                                           );
                                                                      }
                                                                 )}
                                                            </div>
                                                       </div>
                                                  );
                                             }
                                        })}
                              </div>
                         ))}
                    </div>

                    <div className="pl-24">
                         <ListStyleType
                              type={ListStyleTypeEnum.DOT}
                              content={`${data[data.length - 1]?.title}:`}
                              isBold
                         />
                         <ul className="font-normal pl-6">
                              {data[data.length - 1]?.data.map(
                                   (item) =>
                                        typeof item === "string" && (
                                             <div className="flex" key={item}>
                                                  <p className="mr-3">-</p>
                                                  {item}
                                             </div>
                                        )
                              )}
                         </ul>
                    </div>
               </div>
          </>
     );
}
