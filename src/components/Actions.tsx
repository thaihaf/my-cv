import DocumentPdf from "./DocumentPdf";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PDFDownload from "../assets/pdf.png";
import i18n from "../i18n.config";
import { LanguagesTypeEnum } from "../constants/constants";
import UKIcon from "../assets/uk.png";
import VNIcon from "../assets/vn.png";
import { useState } from "react";

const Actions = () => {
     const [language, setLanguage] = useState(i18n.language);
     return (
          <div className="w-100 flex justify-center gap-5 h-8">
               <img
                    src={PDFDownload}
                    alt="pdf download"
                    className="cursor-pointer"
                    onClick={async () => {
                         const doc = <DocumentPdf />;
                         const asPdf = pdf();
                         asPdf.updateContainer(doc);
                         const blob = await asPdf.toBlob();
                         saveAs(blob, "document.pdf");
                    }}
               />
               <img
                    src={language === LanguagesTypeEnum.en ? UKIcon : VNIcon}
                    alt="language switcher"
                    className="cursor-pointer"
                    onClick={() => {
                         switch (language) {
                              case LanguagesTypeEnum.en:
                                   i18n.changeLanguage(LanguagesTypeEnum.vn);
                                   setLanguage(LanguagesTypeEnum.vn);
                                   break;
                              case LanguagesTypeEnum.vn:
                                   i18n.changeLanguage(LanguagesTypeEnum.en);
                                   setLanguage(LanguagesTypeEnum.en);
                                   break;
                         }
                    }}
               />
          </div>
     );
};

export default Actions;
