const graphql = require('graphql');
const { GraphQLObjectType,
    GraphQLString
} = graphql

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        id: {
            type: graphql.GraphQLID
        },
        email: {
            type: GraphQLString
        }
    }
})

module.exports =  UserType;