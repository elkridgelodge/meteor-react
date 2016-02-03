import BlogSchema from '../lib/0.start.js'

import {compose} from 'react-komposer'
//import {composeWithPromise} from 'react-komposer'
import BlogTitles from '../components/3.blog_titles.jsx'

function composer(props, onData) {
  BlogTitlesContainer.query = `
  {
    posts {
      ...${BlogTitles.fragment}
    }
  }
`;
}

const BlogTitlesContainer = GraphQL.bindData((props, onData) => {
  return BlogSchema.watchQuery(BlogTitlesContainer.query, onData)
})(BlogTitles);

export default compose(composer)(BlogTitlesContainer)
