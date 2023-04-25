import { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

interface Value {
    login: boolean;
    register: boolean;
    openLogin: () => void;
    closeLogin: () => void;
    toggleLogin: () => void;
    openRegister: () => void;
    closeRegister: () => void;
    toggleRegister: () => void;
}

const Open = createContext<any>(null);

export const OpenProvider = ({ children }: PropsWithChildren) => {
    const [login, setLogin] = useState<boolean>(false);
    const [register, setRegister] = useState<boolean>(false);

    // open or close
    const openLogin = useCallback(() => {
        setLogin(true);
    }, [login])
    const closeLogin = useCallback(() => {
        setLogin(false);
    }, [login])
    const closeRegister = useCallback(() => {
        setRegister(false);
    }, [register])
    const openRegister = useCallback(() => {
        setRegister(true);
    }, [register])

    // toggle
    const toggleLogin = () => {
        openLogin();
        closeRegister();
    }
    const toggleRegister = () => {
        openRegister();
        closeRegister();
    }

    const value: Value = {
        login,
        register,
        openLogin,
        closeLogin,
        toggleLogin,
        openRegister,
        closeRegister,
        toggleRegister,
    }
    return (
        <Open.Provider value={value}>
            { children }
        </Open.Provider>
    )
}

export const useOpenAuth = () => useContext(Open);