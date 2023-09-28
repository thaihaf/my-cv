import { StyleSheet, Text } from "@react-pdf/renderer";

interface TitleProps {
     title?: string;
     isPDF?: boolean;
}

const styles = StyleSheet.create({
     title: {
          backgroundColor: "rgb(229 231 235)",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "4px",
          borderBottom: "2px",
          borderColor: "gray",
          textTransform: "uppercase",
          fontSize: "20px",
          fontWeight: 600,
          width: "100%",
          marginTop: "24px",
          marginBottom: "24px",
     },
});

export default function Title({ title, isPDF }: TitleProps) {
     if (isPDF) {
          return (
               <Text wrap={false} style={styles.title}>
                    {title}
               </Text>
          );
     }
     return (
          <div className="bg-gray-200 py-1 pl-1 border-b-2 border-gray-400 font-bold uppercase text-xl w-full my-7">
               <div data-aos="fade-left"> {title}</div>
          </div>
     );
}
