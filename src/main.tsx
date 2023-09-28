import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Font } from "@react-pdf/renderer";

Font.register({
     family: "Open Sans",
     fonts: [
          {
               src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
          },
          {
               src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
               fontWeight: 600,
          },
     ],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
     <React.StrictMode>
          <App />
     </React.StrictMode>
);
