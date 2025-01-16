const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}))


app.listen(4000, ()=>{
    console.log("Server is listening on port 4000")
})