import BlogSchema from '../lib/0.start.js'

import {compose} from 'react-komposer'
import BlogPost from '../components/2.blog_post.jsx'

const BlogPostContainer = GraphQL.bindData((props, onData) => {
  const vars = {postId: props.postId};
  return BlogSchema.watchQuery(BlogPostContainer.query, vars, onData);
})(BlogPost);


  BlogPostContainer.query = `
    query _($postId: String!){
      post(_id: $postId) {
        ...${BlogPost.fragment}
      }
    }
  `;


export default compose(BlogPostContainer)(BlogPost)
