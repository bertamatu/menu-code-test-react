import React from 'react';
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client';
import styles from './Menu.module.scss';


const GET_MENU = gql`
    query {
        menu {
            starters {
                id
                price
                name
            }
            mains {
                id
                price
                name
            }
            desserts {
                id
                price
                name
            }
        }
    }
`;

const Menu = () => {
    const { error, loading, data } = useQuery(GET_MENU);

    return (
        <main className={styles.menuContainer}>
            {loading && <p style={{fontSize: '20px'}}>Loading...</p>}
            {error && <p style={{color: 'red'}}>Error: {error.message}</p>}
            {console.log(data)}
        </main>
    );
};

export default Menu;
