import { ApolloProvider, graphql, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// export const baseUrl = 'http://localhost:4000/graphql';
export const baseUrl = 'https://resilent-city--api.herokuapp.com/graphql';

export const client = new ApolloClient({
  link: new HttpLink({ uri: baseUrl }),
  cache: new InMemoryCache()
});
