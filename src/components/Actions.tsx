import DocumentPdf from "./DocumentPdf";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PDFDownload from "../assets/pdf.png";
const Actions = () => {
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
          </div>
     );
};

export default Actions;
