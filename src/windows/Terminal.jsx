import { WindowControls } from "#components";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      {/* BODY */}
      <div className="techstack">
        <p className="command">
          <span>@Arun %</span> show tech stack
        </p>

        {/* LABEL */}
        <div className="label">
          <p>Category</p>
          <p>Technologies</p>
        </div>

        {/* CONTENT */}
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category}>
              <Check className="check" />

              <h3>{category}</h3>

              <div className="items">
                {items.map((item, i) => (
                  <span key={i}>
                    {item}
                    {i < items.length - 1 && ","}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* FOOTER */}
        <div className="footnote">
          <p>
            <Check /> 5 of 5 stacks loaded successfully (100%)
          </p>
          <p>
            <Flag /> Render time: 0.023s
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;