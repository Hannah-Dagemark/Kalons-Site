import React from "react";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen min-w-screen flex items-center justify-center p-4 bg-white ">
      <div className="absolute inset-0 flex flex-wrap justify-center items-center">
        <div className="relative bg-amber-200 border-16 border-amber-500 rounded-2xl shadow-lg p-8 h-150 w-150 text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Background;
