import { useLazyQuery } from "@apollo/client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { loggedInState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CHECK_TOKEN } from "../graphql/queries/users";
import { GET_CARS_BY_PASSENGERS } from "../graphql/queries/cars";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Value {
  user: User;
  setUser: any;
  loading: boolean;
  userStorage: AsyncStorageUserType;
}

interface AsyncStorageUserType {
  token: string;
  userId: string;
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
    rentals: "",
  });
  const setLoggedIn = useSetRecoilState(loggedInState);
  const [checkToken, { loading }] = useLazyQuery(CHECK_TOKEN);
  const [userStorage, setUserStorage] = useState<AsyncStorageUserType>({
    token: "",
    userId: "",
  });

  // keep logged in when refresh
  useEffect(() => {
    (async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const token = await AsyncStorage.getItem("token");
        const data = await checkToken({
          variables: {
            token,
          },
        });
        if (!userId || !token) {
          console.log("You aren't logged in!!!");
          return;
        }

        const success = data?.data?.checkToken || "";

        if (!success) {
          setLoggedIn(false);
          return;
        }

        setUserStorage({
          token,
          userId,
        });
        setLoggedIn(true);
      } catch (error: any) {
        console.log("ERROR with getAllCarsByPassengers", error);
        throw new Error(error);
      }
    })();
  }, [checkToken, setLoggedIn]);

  const value: Value = {
    user,
    setUser,
    loading,
    userStorage,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
