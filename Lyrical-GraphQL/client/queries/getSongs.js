import gql from 'graphql-tag';


export default gql`
    query GetSongs {
          songs {
            title,
            id
          }
    }
`