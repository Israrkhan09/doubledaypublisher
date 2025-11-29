// hooks/CursorContext.jsx (New File)
import React, { createContext, useContext, useState, useMemo } from 'react';

// 1. Create the Context
const CustomCursorContext = createContext(null);

// 2. Create the Provider component
export const CustomCursorProvider = ({ children }) => {
    // State to determine if the cursor should be enlarged
    const [isHovering, setIsHovering] = useState(false);

    // This function is what BookCard and other components will call
    const setCursorHover = (isOver) => {
        setIsHovering(isOver);
    };

    const contextValue = useMemo(() => ({
        isHovering,
        setCursorHover,
    }), [isHovering]);

    return (
        <CustomCursorContext.Provider value={contextValue}>
            {children}
        </CustomCursorContext.Provider>
    );
};

// 3. Create the hook to consume the context
export const useCustomCursor = () => {
    const context = useContext(CustomCursorContext);
    if (context === null) {
        throw new Error('useCustomCursor must be used within a CustomCursorProvider');
    }
    return context;
};