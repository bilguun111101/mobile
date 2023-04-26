import { PropsWithChildren, createContext, useContext, useState } from "react";

interface Value {
    user: User | undefined;
    setUser: any;
}

const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | undefined>(undefined);
    const value: Value = {
        user,
        setUser
    };
    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);