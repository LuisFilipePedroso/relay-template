import {graphql} from 'relay-hooks';

export default graphql`
    mutation CreateTweetMutation($author: String!, $description: String!) {
        createTweet(data: {author: $author, description: $description}) {
            tweetEdge {
                cursor
                node {
                    ...TweetsFragment_Tweet
                }
            }
        }
    }
`;
