const { default: axios } = require('axios');
const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = graphql;
const _ = require('lodash');

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: ()=> ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString},
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args){
                return axios(`http://localhost:8000/companies/${parentValue.id}?_embed=users`).then(res=> res.data.users)
            }
        }
    })
})


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        company: {
            type: CompanyType,
            resolve(parentValue){
                return axios.get(`http://localhost:8000/companies/${parentValue.companyId}`).then(res=> res.data)
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString}},
            resolve (parentValue, args) {
                return axios.get(`http://localhost:8000/users/${args.id}`).then(resp => resp.data)
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString}},
            resolve (parentValue, args) {
                return axios.get(`http://localhost:8000/companies/${args.id}`).then(resp => resp.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})