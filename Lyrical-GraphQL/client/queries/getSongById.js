import gql from 'graphql-tag';

const query = gql`
    query GetSong($id: ID!){
        song(id: $id){
            id,
            title,
            lyrics{
                id,
                content
            }
        }
    }
`;

export default query;