import gql from 'graphql-tag';

const query = gql`
    query GetLyricList($id: ID!){
        song(id: $id){
            lyrics {
                id,
                content
            }
        }
    }
`;

export default query;