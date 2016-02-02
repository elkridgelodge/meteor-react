import React from 'react'

const PostList = ({posts}) => (
  <div>
    This is the post list
    <ul>
      {posts.map(({_id, title}) => (
        <li key={_id}>
          <a href={FlowRouter.path('post', {_id})}>{title}</a>
        </li>
      ))}
    </ul>
  </div>
)

const BlogTitles = ({posts}) => (
  <ul className="blog-titles">
    {posts.map(post => (
      <li key={post._id}>
        <a href={`/post/${post._id}`}>
          {post.title} (<Author author={post.author}/>)
        </a>
      </li>
    ))}
  </ul>
);
BlogTitles.displayName = 'BlogTitles';

BlogTitles.fragment = BlogSchema.createFragment(`
  fragment on BlogPost {
    _id,
    title,
    author {
      ...${Author.fragment}
    }
  }
`);

export default BlogTitles
