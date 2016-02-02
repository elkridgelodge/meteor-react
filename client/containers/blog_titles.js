import {composeWithTracker} from 'react-komposer'
import BlogTitles from '../components/3.blog_titles.jsx'

function composer(props, onData) {
  const handle = Meteor.subscribe('posts')
  if(handle.ready()) {
    const posts = Posts.find({}, {sort: {_id: 1}}).fetch()
    onData(null, {posts})
  }
}

BlogTitlesContainer = GraphQL.bindData((props, onData) => {
  return BlogSchema.watchQuery(BlogTitlesContainer.query, onData)
})(BlogTitles);

BlogTitlesContainer.query = `
  {
    posts {
      ...${BlogTitles.fragment}
    }
  }
`;

export default composeWithTracker(composer)(BlogTitlesContainers)

