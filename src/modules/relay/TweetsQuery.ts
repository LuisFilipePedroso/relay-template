import {graphql} from 'relay-hooks';

export default graphql`
    query TweetsQuery($first: Float!) {
        tweets(first: $first) @connection(key: "Tweet_tweets") {
            edges {
                cursor
                node {
                    ...TweetsFragment_Tweet
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;
