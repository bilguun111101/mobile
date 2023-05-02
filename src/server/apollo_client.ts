import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import Cookies from "js-cookie";
import Cookies from 'js-cookie';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

const authLink = setContext((_, { headers }) => {
    const token = Cookies.get('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : ''
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})