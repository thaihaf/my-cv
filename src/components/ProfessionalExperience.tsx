import { PROFESSIONAL_EXPERIENCE } from "../data";
import Title from "../atoms/Title";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ListStyleType from "../atoms/ListStyleType";
import { ListStyleTypeEnum } from "../constants/constants";

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
     if (isPDF) {
          return (
               <>
                    <Title title={PROFESSIONAL_EXPERIENCE.title} isPDF={true} />

                    <View>
                         {PROFESSIONAL_EXPERIENCE.data.map((item) => {
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

                                        <Text
                                             style={{ fontWeight: 600 }}
                                        >{`Position:  ${item.position}`}</Text>

                                        <View style={styles.project}>
                                             <Text style={{ fontWeight: 600 }}>
                                                  Project:
                                             </Text>
                                             <Text>{item.project.name}</Text>
                                        </View>

                                        <View style={{ paddingLeft: "56px" }}>
                                             <View style={styles.description}>
                                                  <ListStyleType
                                                       type={
                                                            ListStyleTypeEnum.DOT
                                                       }
                                                       content={
                                                            "Project Description: "
                                                       }
                                                       isBold
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
                                                       content={"Team size: "}
                                                       isBold
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
                                                       content={
                                                            "Responsibilities: "
                                                       }
                                                       isBold
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
               <Title title={PROFESSIONAL_EXPERIENCE.title} />

               <div className="container">
                    {PROFESSIONAL_EXPERIENCE.data.map((item) => {
                         return (
                              <div className="mb-8" key={item.id}>
                                   <div className="flex align-center justify-between">
                                        <div className="name font-bold">
                                             {item.name}
                                        </div>
                                        <div className="fromTo">{`${item.fromDate} - ${item.toDate}`}</div>
                                   </div>

                                   <div className="font-bold">{`Position: ${item.position}`}</div>

                                   <div>
                                        <span className="font-bold">
                                             Project:{" "}
                                        </span>
                                        <span>{item.project.name}</span>
                                   </div>

                                   <ul className="list-disc pl-14">
                                        <li className="">
                                             <span className="font-bold">
                                                  Project Description:{" "}
                                             </span>
                                             <span>{item.project.desc}</span>
                                        </li>
                                        <li className="">
                                             <span className="font-bold">
                                                  Team size:{" "}
                                             </span>
                                             <span>{item.project.size}</span>
                                        </li>
                                        <li className="">
                                             <p className="font-bold">
                                                  Responsibilities:{" "}
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
