import gql from 'graphql-tag';

const query = gql`
    query GetSong($id: ID!){
        song(id: $id){
            id,
            title
        }
    }
`;

export default query;