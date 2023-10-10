import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { PERSONAL_INFO } from "../data";
import Actions from "./Actions";

interface PersonalInfoProps {
     isPDF?: boolean;
}

const styles = StyleSheet.create({
     wrapper: { textAlign: "center" },
     name: { fontWeight: "bold", textTransform: "capitalize" },
     email: { color: "rgb(59 130 246)", textDecoration: "underline" },
     links: { marginBottom: "6px" },
     link: { color: "rgb(59 130 246)", textDecoration: "underline" },
});
export default function PersonalInfo({ isPDF }: PersonalInfoProps) {
     if (isPDF) {
          return (
               <View style={styles.wrapper}>
                    <Text style={styles.name}>
                         {PERSONAL_INFO.name}
                         {PERSONAL_INFO.nickname !== "" &&
                              ` (${PERSONAL_INFO.nickname})`}
                    </Text>
                    <Text>{PERSONAL_INFO.position}</Text>
                    <Text>Phone: {PERSONAL_INFO.phone}</Text>
                    <Text>
                         Email:{" "}
                         <Text style={styles.email}>{PERSONAL_INFO.email}</Text>
                    </Text>
                    <Text style={styles.links}>
                         Github:{" "}
                         <Link src={PERSONAL_INFO.link} style={styles.link}>
                              {PERSONAL_INFO.link}
                         </Link>
                    </Text>
               </View>
          );
     }
     return (
          <div
               className="personal-info text-center"
               data-aos="zoom-in-down"
               data-aos-anchor-placement="center-center"
          >
               <div className="name font-bold capitalize">
                    {PERSONAL_INFO.name}
                    {PERSONAL_INFO.nickname !== "" &&
                         ` (${PERSONAL_INFO.nickname})`}
               </div>
               <div className="position">{PERSONAL_INFO.position}</div>
               <div className="phone">Phone: {PERSONAL_INFO.phone}</div>
               <div className="email">
                    Email:{" "}
                    <span className="text-blue-500 underline">
                         {PERSONAL_INFO.email}
                    </span>
               </div>
               <div className="link mb-12">
                    Github:{" "}
                    <a
                         href={PERSONAL_INFO.link}
                         className="text-blue-500 underline"
                    >
                         {PERSONAL_INFO.link}
                    </a>
               </div>

               <Actions />
          </div>
     );
}
