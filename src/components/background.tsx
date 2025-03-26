import React from "react"

const Background: React.FC<{children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative min-h-screen min-w-screen flex items-center justify-center p-4 bg-amber-500 overflow-hidden">
            <div className="absolute inset-0 flex flex-wrap justify-center items-start">
            {Array.from({ length: 20}).map((_, row) => (
                <div key={row} className="flex">
                    {Array.from({ length: 10}).map((_, col) => (
                        <div key={col}
                            className="w-12 h-14 bg-amber-300"
                            style={{
                                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                                transform: row % 2 === 0 ? "translateX(50%)" : "none",
                            }}>
                        </div>
                    ))}
                </div>
            ))}
        
        </div>    
            <div className="relative bg-white rounded-2xl shadow-lg p-8 h-100 w-200 text-center">{children}</div>
        </div>
    )
}

export default Background