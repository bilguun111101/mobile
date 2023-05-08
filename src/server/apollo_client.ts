import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// import Cookies from "js-cookie";
// import Cookies from 'universal-cookie';

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  //   const token = Cookies.get("token");
  return (async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      return {
        headers: {
          ...headers,
          authorization: token ? `${token}` : "",
        },
      };
    } catch (error) {
      console.log(`apollo_clients ${error}`);
    }
  })();
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
