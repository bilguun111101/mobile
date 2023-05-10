import { useLazyQuery } from "@apollo/client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSetRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loggedInState } from "../atoms";
import { GET_CARS_BY_PASSENGERS } from "../graphql/queries/cars";
import { CHECK_TOKEN } from "../graphql/queries/users";

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
    rentals: "",
  });
  const setLoggedIn = useSetRecoilState(loggedInState);
  const [checkToken, { loading }] = useLazyQuery(CHECK_TOKEN);

  // keep logged in when refresh
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const data = await checkToken({
          variables: {
            token,
          },
        });

        if (!data.data) {
          console.log("You aren't logged in!!!");
          return;
        }

        const success = data?.data?.checkToken || "";

        if (!success) {
          setLoggedIn(false);
          return;
        }

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
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
