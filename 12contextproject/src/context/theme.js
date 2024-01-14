import { createContext,useContext } from "react";

//variable or storage 
export const themeVar =  createContext({
    Mode:"light",
    lightMode: () => {},
    darkMode: () => {}
})

//ab iska provider bnana hai
export const themeProvider = themeVar.Provider

//ab ek hook bnana pdega 
//customize

export default function useTheme(){
    return useContext(themeVar)
}