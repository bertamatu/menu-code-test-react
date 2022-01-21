import React from 'react';
import { render } from 'react-dom';
import Menu from './components/Menu';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <>
            <h1>Menu Test</h1>
            <Menu />
        </>
    );
};

render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
