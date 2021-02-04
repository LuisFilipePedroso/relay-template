import {graphql} from 'relay-hooks';

export default graphql`
    mutation UpvoteTweetMutation($id: String!) {
        upvoteTweet(id: $id) {
            ...TweetsFragment_Tweet
        }
    }
`;
