import React, { useMemo } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = React.memo(({ isMinimized, isMaximized }) => {
  const file = useMemo(() => "files/arun_cv.pdf", []);

  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/arun_cv.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* PDF VIEW */}
      <div
        className={`w-full h-full overflow-auto
        ${
          isMinimized
            ? "bg-white flex justify-start items-start p-0"
            : isMaximized
            ? "bg-gray-200 flex justify-center items-start py-6"
            : "bg-white flex justify-center py-4"
        }`}
      >
        <div className={`${isMinimized ? "" : "inline-block shadow-lg"}`}>
          <Document file={file}>
            <Page
              pageNumber={1}
              scale={
                isMinimized
                  ? 1        // 🔥 no zoom
                  : isMaximized
                  ? 1.6      // 🔥 large view
                  : 1.1      // 🔥 normal
              }
              renderTextLayer
              renderAnnotationLayer
            />
          </Document>
        </div>
      </div>
    </>
  );
});

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;