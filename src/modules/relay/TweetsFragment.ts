import {graphql} from 'relay-hooks';

export default graphql`
    fragment TweetsFragment_Tweet on Tweet {
        id
        author {
            ... on User {
                id
                name
            }
        }
        description
        likes
        createdAt
    }
`;
