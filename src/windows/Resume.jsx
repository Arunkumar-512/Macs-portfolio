import React, { useMemo, useState, useEffect } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import clsx from "clsx";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = React.memo(({ isMinimized, isMaximized }) => {
  const file = useMemo(() => "files/arun_cv.pdf", []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 🔥 Listen for resize to adjust PDF scale dynamically
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Calculate scale based on screen size and window state
  const getScale = () => {
    if (isMinimized) return 0.4;
    
    const isMobile = windowWidth < 640;
    if (isMobile) {
      // On mobile, use a smaller scale so the PDF fits the 90-95% width window
      return isMaximized ? 0.85 : 0.65; 
    }
    
    // Desktop scales
    return isMaximized ? 1.5 : 1.1;
  };

  return (
    <div className="flex flex-col h-full w-full bg-white overflow-hidden">
      {/* HEADER: Keep fixed at the top */}
      <div id="window-header" className="flex items-center justify-between px-3 py-2 border-b shrink-0 bg-white/80 backdrop-blur-md">
        <WindowControls target="resume" />
        <h2 className="text-sm font-bold text-gray-700 truncate mx-4">arun_cv.pdf</h2>

        <a
          href="files/arun_cv.pdf"
          download
          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          title="Download resume"
        >
          <Download size={18} className="text-gray-600" />
        </a>
      </div>

      {/* PDF VIEW: This area handles the scroll */}
      <div
        className={clsx(
          "flex-1 overflow-auto custom-scrollbar flex justify-center items-start",
          isMaximized ? "bg-gray-200" : "bg-white"
        )}
      >
        <div 
          className={clsx(
            "my-4 transition-all duration-300 transform-gpu",
            !isMinimized && "shadow-2xl border border-gray-300"
          )}
        >
          <Document 
            file={file} 
            loading={<div className="p-10 text-xs text-gray-400">Loading PDF...</div>}
          >
            <Page
              pageNumber={1}
              scale={getScale()}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              // Prevent internal canvas from exceeding its container
              className="max-w-full h-auto"
            />
          </Document>
        </div>
      </div>

      {/* Inline styles for the scrollbar experience */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .react-pdf__Page__canvas {
          margin: 0 auto !important;
          max-width: 100%;
          height: auto !important;
        }
      `}} />
    </div>
  );
});

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;