import useWindowStore from "#store/window";
import React from "react";

const WindowControls = ({ target }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    windows,
  } = useWindowStore();

  const isMaximized = windows[target]?.isMaximized;

  // 🔒 HARD BLOCK all unwanted propagation
  const handleClick = (e, action) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  };

  return (
    <div
      className="window-controls flex gap-2 items-center"
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {/* 🔴 Close */}
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-red-500"
        onMouseDown={(e) => e.stopPropagation()} // 🔥 extra safety
        onClick={(e) => handleClick(e, () => closeWindow(target))}
        title="Close"
      />

      {/* 🟡 Minimize */}
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-yellow-400"
        onMouseDown={(e) => e.stopPropagation()} // 🔥 prevents drag trigger
        onClick={(e) => handleClick(e, () => minimizeWindow(target))}
        title="Minimize"
      />

      {/* 🟢 Maximize / Restore */}
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-green-500"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => handleClick(e, () => maximizeWindow(target))}
        title={isMaximized ? "Restore" : "Maximize"}
      />
    </div>
  );
};

export default React.memo(WindowControls);