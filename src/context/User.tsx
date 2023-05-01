import { PropsWithChildren, createContext, useContext, useState } from "react";

interface Value {
    user: User;
    setUser: any;
}

const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User>({
        id: "",
        age: "",
        role: "",
        name: "",
        email: "",
        phone: "",
        rentals: ""
    });
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