import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();

  // ✅ FIX: correct access
  const file = windows.txtfile?.data;

  if (!file) return null;

  const { name, image, subtitle, description } = file;

  // ✅ Normalize description
  const formattedDescription = Array.isArray(description)
    ? description.join("\n")
    : description || "";

  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      {/* CONTENT */}
      <div className="bg-white h-full overflow-y-auto py-6">
        
        <div className="max-w-3xl mx-auto px-4">

          {/* IMAGE */}
          {image && (
            <div className="w-full mb-4">
              <img
                src={image}
                alt={name}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          {/* SUBTITLE */}
          {subtitle && (
            <h3 className="text-lg font-semibold mb-3">
              {subtitle}
            </h3>
          )}

          {/* DESCRIPTION */}
          {formattedDescription && (
            <div className="text-sm leading-relaxed text-gray-800 space-y-3">
              
              <ul className="list-disc ml-5 space-y-1">
                {formattedDescription.split("\n").map((line, index) => {
                  const trimmed = line.trim();

                  if (!trimmed) return null;

                  // Section heading
                  if (trimmed.includes("Skills & Technologies")) {
                    return (
                      <h3
                        key={index}
                        className="font-semibold text-base mt-4"
                      >
                        {trimmed}
                      </h3>
                    );
                  }

                  // Bullet points
                  if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                    return (
                      <li key={index}>
                        {trimmed.replace(/^(\*|-)\s/, "")}
                      </li>
                    );
                  }

                  // Paragraph
                  return <p key={index}>{trimmed}</p>;
                })}
              </ul>

            </div>
          )}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;