import { createContext, useContext, useState } from 'react';

const AppContext = createContext()

export const AppWrapper = ({ children }) => {
    const [toggle, isToggled] = useState()

    return (
        <AppContext.Provider value={{
            toggle,
            isToggled
        }} >
            {children}
        </AppContext.Provider>
    )
}

export const useToggle = () => {

    const context = useContext(AppContext)
    const { toggle, isToggled } = context
    return { toggle, isToggled }
}