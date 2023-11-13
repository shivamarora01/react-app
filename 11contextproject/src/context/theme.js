import { createContext,useContext } from "react";

//ThemeContext is a global variable or storage
export const ThemeContext = createContext({
    //variable
    Mode : "light",
    //methods
    lightMode: () => {},
    darkMode: () => {},
})

//ThemeProvider is for wrapping up
export const ThemeProvider = ThemeContext.Provider

//custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}