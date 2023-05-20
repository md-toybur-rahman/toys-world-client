import { createContext } from "react";

export const ScrollContext = createContext(null);

const ScrollProvider = ({children}) => {
    const scrollHandler = () => {
        window.scrollTo({ top: 0, left: 0, behavior:'smooth'});
    }
    return (
        <ScrollContext.Provider value={scrollHandler}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;