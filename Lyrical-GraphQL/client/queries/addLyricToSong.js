import gql from 'graphql-tag';

const mutate = gql`
    mutation AddLyricToSong($songId: ID!, $content: String!){
        addLyricToSong(songId: $songId, content: $content){
            id,
            lyrics {
                id,
                content,
                likes
            }
        }
    }
`;

export default mutate;