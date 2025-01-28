const graphql = require('graphql');
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;


const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        signup: {
            type: UserType,
            args: {
                email: {
                   type: GraphQLString
                },
                password: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, {email, password }, request){
                return AuthService.signup(email, password, request);
            }
        }
    }
})

module.exports = mutation;