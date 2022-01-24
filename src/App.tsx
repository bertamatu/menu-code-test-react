import './client/styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { ApolloProvider } from '@apollo/client';
import Menu from './client/components/menu/Menu';
import Header from './client/components/header/Header';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <>
            <Header/>
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
