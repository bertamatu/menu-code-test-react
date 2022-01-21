const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const menu = require('./static/menu-data.json');
const gqlSchema = require('./static/gql-schema');

const port = 3000;
const app = express();

app.get('/api/v1/menu', (req, res) => {
    res.json(menu, { msg: 'This is CORS-enabled for all origins!' });
});

app.use(
    '/graphql',
    cors(),
    graphqlHTTP({
        schema: buildSchema(gqlSchema),
        rootValue: { menu: () => menu },
        graphiql: true,
    }),
);

app.listen(port, () => {
    console.log(`CORS-enabled web server listening on port ${port}`);
    console.log(`The API server is running at http://localhost:${port}/api`);
    console.log(`The GraphQL server is running at http://localhost:${port}/graphql`);
});
