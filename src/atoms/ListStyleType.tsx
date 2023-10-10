import { ListStyleTypeEnum } from "@/constants/constants";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import cx from "classnames";
interface ListStyleTypeProps {
     content: string;
     type: ListStyleTypeEnum;
     isBold?: boolean;
     isPDF?: boolean;
}

const styles = StyleSheet.create({
     wrapper: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          marginBottom: "5px",
     },
     type: { marginRight: "7px" },
});
export default function ListStyleType({
     isPDF,
     type,
     content,
     isBold = false,
}: ListStyleTypeProps) {
     if (isPDF) {
          return (
               <View
                    style={[
                         styles.wrapper,
                         {
                              fontWeight: isBold ? 600 : "normal",
                         },
                    ]}
               >
                    {type && <Text style={styles.type}>{type}</Text>}
                    <Text>{content}</Text>
               </View>
          );
     }

     return (
          <div
               className={cx(
                    "flex flex-row flex-nowrap mb-1.5",
                    isBold && "font-bold"
               )}
          >
               {type && <span className="mr-2">{type}</span>}
               <span>{content}</span>
          </div>
     );
}
