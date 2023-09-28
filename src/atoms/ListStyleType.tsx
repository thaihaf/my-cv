import { ListStyleTypeEnum } from "@/constants/constants";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

interface ListStyleTypeProps {
     content: string;
     type: ListStyleTypeEnum;
     isBold?: boolean;
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
     type,
     content,
     isBold = false,
}: ListStyleTypeProps) {
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
