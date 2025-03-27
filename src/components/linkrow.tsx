import React from "react";

const LinkRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full p-2 flex items-center justify-between gap-2 border-2 border-amber-500 rounded-full">
      {React.Children.map(children, (child, index) => (
        <>
          {index > 0 && <div className="h-6 w-0.5 bg-amber-500" />}
          <div key={index} className="px-2">
            {child}
          </div>
        </>
      ))}
    </div>
  );
};

export default LinkRow;
