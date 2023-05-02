import Cookies from 'js-cookie';
import {loggedInState} from '../atoms';
import {useSetRecoilState} from 'recoil';
import {useLazyQuery} from '@apollo/client';
import {CHECK_TOKEN} from '../server/queries/users';
import {PropsWithChildren, createContext, useContext, useEffect} from 'react';

interface Value {
  loading: boolean;
}

// const AuthContext = createContext({ loading: false });
const AuthContext = createContext({loading: false});

interface AuthProviderProps {
  children: PropsWithChildren;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const setLoggedIn = useSetRecoilState(loggedInState);
  const [checkToken, {loading}] = useLazyQuery(CHECK_TOKEN);

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
        }

        const success = data?.data?.checkToken || '';

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
    loading,
  };
};

export const useAuth = () => useContext(AuthContext);
