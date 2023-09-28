import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { TECHNICAL_SKILLS } from "../data";
import Title from "../atoms/Title";
import ListStyleType from "../atoms/ListStyleType";
import { ListStyleTypeEnum } from "../constants/constants";

interface TechnicalSkillsProps {
     isPDF?: boolean;
}

const styles = StyleSheet.create({
     wrapper: { display: "flex", flexDirection: "row", width: "100%" },
     column: { flex: 1 },
     item: { marginLeft: "48px" },
     itemDetails: {
          paddingLeft: "24px",
     },
});
export default function TechnicalSkills({ isPDF }: TechnicalSkillsProps) {
     if (isPDF) {
          return (
               <>
                    <Title title={"technical skills"} isPDF={true} />

                    <View style={{ marginBottom: "15px" }}>
                         <View style={styles.wrapper}>
                              <View style={styles.column}>
                                   {[
                                        TECHNICAL_SKILLS.PROGRAMMING_LANGUAGES,
                                        TECHNICAL_SKILLS.FRAMEWORKS_PLATFORMS,
                                        TECHNICAL_SKILLS.DATABASE_MANAGEMENT_SYSTEMS,
                                   ].map((skills) => (
                                        <View style={styles.item}>
                                             <ListStyleType
                                                  type={ListStyleTypeEnum.DOT}
                                                  content={`${skills.title}:`}
                                                  isBold
                                             />
                                             <View style={styles.itemDetails}>
                                                  {skills.data.map((skill) => (
                                                       <ListStyleType
                                                            type={
                                                                 ListStyleTypeEnum.DISC
                                                            }
                                                            content={skill}
                                                            key={skill}
                                                       />
                                                  ))}
                                             </View>
                                        </View>
                                   ))}
                              </View>

                              <View style={styles.column}>
                                   {[
                                        TECHNICAL_SKILLS.VERSION_CONTROL,
                                        TECHNICAL_SKILLS.FOREIGN_LANGUAGES,
                                        TECHNICAL_SKILLS.SOFT_SKILLS,
                                   ].map((skills) => (
                                        <View style={styles.item}>
                                             <ListStyleType
                                                  type={ListStyleTypeEnum.DOT}
                                                  content={`${skills.title}:`}
                                                  isBold
                                             />
                                             <View style={styles.itemDetails}>
                                                  {skills.data.map((skill) => {
                                                       if (
                                                            typeof skill ===
                                                            "object"
                                                       ) {
                                                            return (
                                                                 <>
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
                                                                                />
                                                                           )
                                                                      )}
                                                                 </>
                                                            );
                                                       }
                                                       return (
                                                            <ListStyleType
                                                                 type={
                                                                      ListStyleTypeEnum.DISC
                                                                 }
                                                                 content={skill}
                                                                 key={skill}
                                                            />
                                                       );
                                                  })}
                                             </View>
                                        </View>
                                   ))}
                                   <li>
                                        {`${TECHNICAL_SKILLS.FOREIGN_LANGUAGES.title}:`}
                                        {TECHNICAL_SKILLS.FOREIGN_LANGUAGES.data.map(
                                             (item) => {
                                                  return (
                                                       <p
                                                            className="font-normal"
                                                            key={item.id}
                                                       >
                                                            {`${item.title}:`}
                                                            <ul className="pl-6">
                                                                 {item.details.map(
                                                                      (
                                                                           item
                                                                      ) => (
                                                                           <li
                                                                                className="flex"
                                                                                key={
                                                                                     item
                                                                                }
                                                                           >
                                                                                <p className="mr-3">
                                                                                     -
                                                                                </p>
                                                                                {
                                                                                     item
                                                                                }
                                                                           </li>
                                                                      )
                                                                 )}
                                                            </ul>
                                                       </p>
                                                  );
                                             }
                                        )}
                                   </li>
                              </View>
                         </View>

                         <View style={styles.item}>
                              <ListStyleType
                                   type={ListStyleTypeEnum.DOT}
                                   content={`${TECHNICAL_SKILLS.OTHER.title}:`}
                                   isBold
                              />
                              <View style={styles.itemDetails}>
                                   {TECHNICAL_SKILLS.OTHER.data.map((skill) => (
                                        <ListStyleType
                                             type={ListStyleTypeEnum.DISC}
                                             content={skill}
                                             key={skill}
                                        />
                                   ))}
                              </View>
                         </View>
                    </View>
               </>
          );
     }
     return (
          <>
               <Title title={"technical skills"} />

               <div className="container">
                    <div className="grid grid-cols-2">
                         <ul className="font-bold list-disc pl-24">
                              <li>
                                   {`${TECHNICAL_SKILLS.PROGRAMMING_LANGUAGES.title}:`}
                                   <ul className="font-normal pl-6">
                                        {TECHNICAL_SKILLS.PROGRAMMING_LANGUAGES.data.map(
                                             (item) => (
                                                  <li
                                                       className="flex"
                                                       key={item}
                                                  >
                                                       <p className="mr-3">-</p>
                                                       {item}
                                                  </li>
                                             )
                                        )}
                                   </ul>
                              </li>
                              <li>
                                   {`${TECHNICAL_SKILLS.FRAMEWORKS_PLATFORMS.title}:`}
                                   <ul className="font-normal pl-6">
                                        {TECHNICAL_SKILLS.FRAMEWORKS_PLATFORMS.data.map(
                                             (item) => (
                                                  <li
                                                       className="flex"
                                                       key={item}
                                                  >
                                                       <p className="mr-3">-</p>
                                                       {item}
                                                  </li>
                                             )
                                        )}
                                   </ul>
                              </li>
                              <li>
                                   {`${TECHNICAL_SKILLS.DATABASE_MANAGEMENT_SYSTEMS.title}:`}
                                   <ul className="font-normal pl-6">
                                        {TECHNICAL_SKILLS.DATABASE_MANAGEMENT_SYSTEMS.data.map(
                                             (item) => (
                                                  <li
                                                       className="flex"
                                                       key={item}
                                                  >
                                                       <p className="mr-3">-</p>
                                                       {item}
                                                  </li>
                                             )
                                        )}
                                   </ul>
                              </li>
                         </ul>

                         <ul className="font-bold list-disc pl-24">
                              <li>
                                   {`${TECHNICAL_SKILLS.VERSION_CONTROL.title}:`}
                                   <ul className="font-normal pl-6">
                                        {TECHNICAL_SKILLS.VERSION_CONTROL.data.map(
                                             (item) => (
                                                  <li
                                                       className="flex"
                                                       key={item}
                                                  >
                                                       <p className="mr-3">-</p>
                                                       {item}
                                                  </li>
                                             )
                                        )}
                                   </ul>
                              </li>
                              <li>
                                   {`${TECHNICAL_SKILLS.FOREIGN_LANGUAGES.title}:`}
                                   {TECHNICAL_SKILLS.FOREIGN_LANGUAGES.data.map(
                                        (item) => {
                                             return (
                                                  <p
                                                       className="font-normal"
                                                       key={item.id}
                                                  >
                                                       {`${item.title}:`}
                                                       <ul className="pl-6">
                                                            {item.details.map(
                                                                 (item) => (
                                                                      <li
                                                                           className="flex"
                                                                           key={
                                                                                item
                                                                           }
                                                                      >
                                                                           <p className="mr-3">
                                                                                -
                                                                           </p>
                                                                           {
                                                                                item
                                                                           }
                                                                      </li>
                                                                 )
                                                            )}
                                                       </ul>
                                                  </p>
                                             );
                                        }
                                   )}
                              </li>
                              <li>
                                   {`${TECHNICAL_SKILLS.SOFT_SKILLS.title}:`}
                                   <ul className="font-normal pl-6">
                                        {TECHNICAL_SKILLS.SOFT_SKILLS.data.map(
                                             (item) => (
                                                  <li
                                                       className="flex"
                                                       key={item}
                                                  >
                                                       <p className="mr-3">-</p>
                                                       {item}
                                                  </li>
                                             )
                                        )}
                                   </ul>
                              </li>
                         </ul>
                    </div>

                    <ul className="font-bold list-disc pl-24">
                         <li>
                              {`${TECHNICAL_SKILLS.OTHER.title}:`}
                              <ul className="font-normal pl-6">
                                   {TECHNICAL_SKILLS.OTHER.data.map((item) => (
                                        <li className="flex" key={item}>
                                             <p className="mr-3">-</p>
                                             {item}
                                        </li>
                                   ))}
                              </ul>
                         </li>
                    </ul>
               </div>
          </>
     );
}
