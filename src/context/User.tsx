import { useLazyQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { loggedInState } from "../atoms";
import { CHECK_TOKEN } from "../server/queries/users";

interface Value {
    user: User;
    setUser: any;
    loading: boolean;
}

const UserContext = createContext<any>({ loading: false });

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
    const setLoggedIn = useSetRecoilState(loggedInState);
    const [checkToken, { loading }] = useLazyQuery(CHECK_TOKEN);

    // keep logged in when refresh
    useEffect(() => {
        const token = Cookies.get('token');

        (async () => {
        try {
            const data = await checkToken({
            variables: {
                token,
            },
            });

            if (!data.data) {
                console.log("You aren't logged in!!!");
                return;
            };

            const success = data?.data?.checkToken || "";

            if (!success) {
            setLoggedIn(false);
            return;
            }

            setLoggedIn(true);
        } catch (error: any) {
            console.log('ERROR with getAllCarsByPassengers', error);
            throw new Error(error);
        }
        })();
    }, [checkToken, setLoggedIn]);

    const value: Value = {
        user,
        setUser,
        loading,
    };
    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);