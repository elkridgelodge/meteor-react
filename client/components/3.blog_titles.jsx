import React from 'react'
import Author from './0.author.jsx'

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
