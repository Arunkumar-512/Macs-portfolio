import { WindowControls } from "#components";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import clsx from "clsx";

const Terminal = () => {
  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-[#cccccc] overflow-hidden font-mono">
      {/* HEADER */}
      <div 
        id="window-header" 
        className="flex items-center px-4 py-2 bg-[#323233] border-b border-[#2b2b2b] shrink-0"
      >
        <WindowControls target="terminal" />
        <h2 className="text-xs font-medium ml-4 opacity-80 uppercase tracking-widest">Tech Stack</h2>
      </div>

      {/* BODY - This container handles the scroll */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-terminal-scrollbar p-6 max-sm:p-4">
        <div className="techstack flex flex-col gap-6">
          <p className="command text-[#4ec9b0] text-sm max-sm:text-xs">
            <span className="text-[#569cd6]">@Arun %</span> show tech stack
          </p>

          {/* TABLE HEADERS - Adjusted for mobile */}
          <div className="label grid grid-cols-12 border-b border-white/10 pb-2 text-[10px] font-bold text-gray-500 uppercase">
            <p className="col-span-4">Category</p>
            <p className="col-span-8">Technologies</p>
          </div>

          {/* CONTENT */}
          <ul className="content flex flex-col gap-4">
            {techStack.map(({ category, items }) => (
              <li 
                key={category} 
                className="grid grid-cols-12 gap-2 items-start text-sm max-sm:text-xs group"
              >
                <div className="col-span-4 flex items-center gap-2">
                  <Check className="check size-3 text-[#b5cea8] shrink-0" />
                  <h3 className="font-semibold text-[#ce9178] truncate">{category}</h3>
                </div>

                <div className="col-span-8 flex flex-wrap gap-x-1.5 gap-y-1 text-[#dcdcdc] opacity-90">
                  {items.map((item, i) => (
                    <span key={i} className="whitespace-nowrap">
                      {item}
                      {i < items.length - 1 && <span className="text-gray-600">,</span>}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* FOOTER */}
          <div className="footnote border-t border-white/5 pt-4 mt-2 space-y-1 opacity-60 text-[11px]">
            <p className="flex items-center gap-2">
              <Check size={12} className="text-[#b5cea8]" /> 
              {techStack.length} of {techStack.length} stacks loaded successfully (100%)
            </p>
            <p className="flex items-center gap-2">
              <Flag size={12} /> Render time: 0.023s
            </p>
          </div>
        </div>
      </div>

      {/* Terminal Themed Scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-terminal-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-terminal-scrollbar::-webkit-scrollbar-track {
          background: #1e1e1e;
        }
        .custom-terminal-scrollbar::-webkit-scrollbar-thumb {
          background: #333333;
          border-radius: 4px;
          border: 2px solid #1e1e1e;
        }
        .custom-terminal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #444444;
        }
      `}} />
    </div>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;