import { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

interface Value {
    login: boolean;
    register: boolean;
    toggle: () => void;
    openLogin: () => void;
    closeLogin: () => void;
    openRegister: () => void;
    closeRegister: () => void;
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

    const toggle = useCallback(() => {
        setLogin(!login)
        setRegister(!register);
    }, [login, register])

    const value: Value = {
        login,
        toggle,
        register,
        openLogin,
        closeLogin,
        openRegister,
        closeRegister,
    }
    return (
        <Open.Provider value={value}>
            { children }
        </Open.Provider>
    )
}

export const useOpenAuth = () => useContext(Open);