import Title from "../atoms/Title";
import { PASTIMES_AND_ACTIVITIES } from "../data";
import { View } from "@react-pdf/renderer";
import ListStyleType from "../atoms/ListStyleType";
import { ListStyleTypeEnum } from "../constants/constants";

interface PastimesAndActivitiesProps {
     isPDF?: boolean;
}
export default function PastimesAndActivities({
     isPDF,
}: PastimesAndActivitiesProps) {
     if (isPDF) {
          return (
               <>
                    <Title title={PASTIMES_AND_ACTIVITIES.title} isPDF={true} />

                    <View wrap={false}>
                         <View style={{ paddingLeft: "28px" }}>
                              {PASTIMES_AND_ACTIVITIES.data.map((item) => (
                                   <ListStyleType
                                        type={ListStyleTypeEnum.DOT}
                                        content={item}
                                        key={item}
                                   />
                              ))}
                         </View>
                    </View>
               </>
          );
     }
     return (
          <>
               <Title title={PASTIMES_AND_ACTIVITIES.title} />

               <div className="container">
                    <ul className="list-disc pl-14">
                         {PASTIMES_AND_ACTIVITIES.data.map((item) => (
                              <li key={item}>{item}</li>
                         ))}
                    </ul>
               </div>
          </>
     );
}
