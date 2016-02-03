import React from 'react'
import Author from './0.author.jsx'

const Comment = ({comment}) => (
  <div>
    <Author author={comment.author}/>: {comment.text}
  </div>
);
Comment.displayName = 'Comment';

Comment.fragment = BlogSchema.createFragment(`
  fragment on Comment {
    _id,
    text,
    author {
      ...${Author.fragment}
    }
  }
`);

export default Comment
