import gql from 'graphql-tag';

const query = gql`
    query GetUser{
    user{
        id,
        email
    }
    }
`;

export default query;