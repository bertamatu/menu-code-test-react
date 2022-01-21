import React from 'react';
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client';

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
        <>
            {console.log(error, loading, data)}
            <div>HELLO FROM MENU</div>
        </>
    );
};

export default Menu;
