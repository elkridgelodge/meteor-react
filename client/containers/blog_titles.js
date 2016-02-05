import BlogSchema from '../lib/0.start.js'

import {compose} from 'react-komposer'
//import {composeWithPromise} from 'react-komposer'
import BlogTitles from '../components/3.blog_titles.jsx'



const BlogTitlesContainer = GraphQL.bindData((props, onData) => {
  return BlogSchema.watchQuery(BlogTitlesContainer.query, onData)
})(BlogTitles);

  BlogTitlesContainer.query = `
  {
    posts {
      ...${BlogTitles.fragment}
    }
  }
`;


export default compose(BlogTitlesContainer)(BlogTitles)
