import {createContext,useContext} from 'react'

export const Themecontext=createContext({  //This is an object
    Thememode:"light",
    darktheme:()=>{},
    lighttheme:()=>{}
    // any no. of objects
    })

export const Themeprovider=Themecontext.Provider;

export default function useTheme(){

    return useContext(Themecontext);
}